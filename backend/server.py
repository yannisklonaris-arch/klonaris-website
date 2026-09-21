import asyncio
import logging
import os
import uuid
from contextlib import asynccontextmanager
from datetime import datetime, timezone
from pathlib import Path
from typing import Literal, Optional

from dotenv import load_dotenv
from fastapi import FastAPI, APIRouter, HTTPException
from pydantic import BaseModel, EmailStr, Field, field_validator
from starlette.middleware.cors import CORSMiddleware

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

from lib.db import client, db, ensure_indexes

RESEND_API_KEY = os.environ.get("RESEND_API_KEY", "").strip()
SENDER_EMAIL = os.environ.get("SENDER_EMAIL", "").strip()
NOTIFY_EMAIL = os.environ.get("NOTIFY_EMAIL", "").strip()

resend = None
if RESEND_API_KEY:
    import resend as _resend
    _resend.api_key = RESEND_API_KEY
    resend = _resend


@asynccontextmanager
async def lifespan(app: FastAPI):
    app.state.index_task = asyncio.create_task(ensure_indexes())
    yield
    client.close()


app = FastAPI(lifespan=lifespan, title="Klonaris API")
api_router = APIRouter(prefix="/api")


class QuoteRequestCreate(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    email: EmailStr
    organization: Optional[str] = Field(default=None, max_length=160)
    urgency: Literal["standard", "priority", "critical"]
    message: str = Field(min_length=20, max_length=4000)
    language: Literal["fr", "en"] = "fr"
    ai_consent: bool
    company_website: Optional[str] = Field(default=None, max_length=200)

    @field_validator("ai_consent")
    @classmethod
    def ai_consent_required(cls, v: bool) -> bool:
        if not v:
            raise ValueError("ai_consent required")
        return v


class QuoteRequestResponse(BaseModel):
    id: str
    status: str
    emailSent: bool


URGENCY_TAGS = {
    "fr": {"standard": "STANDARD", "priority": "PRIORITAIRE", "critical": "CRITIQUE"},
    "en": {"standard": "STANDARD", "priority": "PRIORITY", "critical": "CRITICAL"},
}


def _esc(value: str) -> str:
    return value.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace("\n", "<br/>")


def _notification_html(req: QuoteRequestCreate, request_id: str) -> str:
    lang = req.language
    urgency_tag = URGENCY_TAGS[lang][req.urgency]
    rows = [
        ("Délai souhaité / Urgency", urgency_tag),
        ("Nom / Name", _esc(req.name)),
        ("E-mail", _esc(req.email)),
        ("Organisation / Organization", _esc(req.organization or "—")),
    ]
    row_html = "".join(
        f'<tr><td style="padding:8px 12px;border:1px solid #1E293B;color:#94A3B8;font-size:13px;">{k}</td>'
        f'<td style="padding:8px 12px;border:1px solid #1E293B;color:#F1F5F9;font-size:13px;">{v}</td></tr>'
        for k, v in rows
    )
    ai_line = (
        "Outils IA : utilisation comprise et acceptée par le demandeur."
        if lang == "fr"
        else "AI tools: usage understood and accepted by the requester."
    )
    return f"""
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#070B14;padding:24px;font-family:Arial,sans-serif;">
  <tr><td>
    <p style="color:#38BDF8;font-size:12px;letter-spacing:2px;margin:0 0 8px;">KLONARIS — [{urgency_tag}] NOUVELLE DEMANDE DE DEVIS</p>
    <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;">{row_html}</table>
    <p style="color:#94A3B8;font-size:12px;margin:16px 0 4px;">Message</p>
    <p style="color:#F1F5F9;font-size:14px;background:#0D1527;border:1px solid #1E293B;padding:12px;">{_esc(req.message)}</p>
    <p style="color:#64748B;font-size:12px;margin-top:12px;">{_esc(ai_line)} · ID {request_id}</p>
  </td></tr>
</table>"""


def _confirmation_html(req: QuoteRequestCreate) -> tuple[str, str]:
    if req.language == "en":
        subject = "Klonaris — your quote request has been received"
        body = f"""
<p style="color:#F1F5F9;font-size:14px;">Hello {_esc(req.name)},</p>
<p style="color:#CBD5E1;font-size:14px;line-height:1.7;">Thank you for your quote request — it has been received. You will get a personal reply as soon as possible.</p>
<p style="color:#CBD5E1;font-size:14px;line-height:1.7;"><strong style="color:#93C5FD;">No documents are needed at this stage.</strong> After an initial exchange and once confidentiality terms are defined, a limited-access Microsoft OneDrive folder will be shared with you personally.</p>
<p style="color:#94A3B8;font-size:12px;line-height:1.7;margin-top:16px;">Note: Klonaris may use artificial intelligence tools as assistance instruments, with human review. The applicable processing and confidentiality terms will be specified before any documents are transferred.</p>
<p style="color:#94A3B8;font-size:12px;margin-top:24px;">— Klonaris · Engineering technical documentation</p>"""
    else:
        subject = "Klonaris — votre demande de devis a bien été reçue"
        body = f"""
<p style="color:#F1F5F9;font-size:14px;">Bonjour {_esc(req.name)},</p>
<p style="color:#CBD5E1;font-size:14px;line-height:1.7;">Merci pour votre demande de devis — elle a bien été reçue. Vous recevrez une réponse personnelle dans les meilleurs délais.</p>
<p style="color:#CBD5E1;font-size:14px;line-height:1.7;"><strong style="color:#93C5FD;">Aucun document n'est requis à ce stade.</strong> Après un premier échange et la définition des modalités de confidentialité, un dossier Microsoft OneDrive à accès limité vous sera communiqué personnellement.</p>
<p style="color:#94A3B8;font-size:12px;line-height:1.7;margin-top:16px;">Note : Klonaris peut utiliser des outils d'intelligence artificielle comme instruments d'assistance, avec revue humaine. Les modalités de traitement et de confidentialité applicables seront précisées avant toute transmission de documents.</p>
<p style="color:#94A3B8;font-size:12px;margin-top:24px;">— Klonaris · Documentation technique d'ingénierie</p>"""
    html = f"""
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#070B14;padding:24px;font-family:Arial,sans-serif;">
  <tr><td>
    <p style="color:#38BDF8;font-size:12px;letter-spacing:2px;margin:0 0 16px;">KLONARIS</p>
    {body}
  </td></tr>
</table>"""
    return subject, html


async def _send_email(to: str, subject: str, html: str) -> bool:
    if not resend or not SENDER_EMAIL:
        logger.warning("Resend not configured; email to %s skipped", to)
        return False
    params = {"from": SENDER_EMAIL, "to": [to], "subject": subject, "html": html}
    try:
        await asyncio.to_thread(resend.Emails.send, params)
        return True
    except Exception as exc:
        logger.error("Resend send failed to %s: %s", to, exc)
        return False


@api_router.get("/")
async def root():
    return {"message": "Klonaris API", "status": "ok"}


@api_router.post("/quote-requests", response_model=QuoteRequestResponse)
async def create_quote_request(payload: QuoteRequestCreate):
    if payload.company_website:
        return QuoteRequestResponse(id=str(uuid.uuid4()), status="received", emailSent=False)

    request_id = str(uuid.uuid4())
    doc = {
        "id": request_id,
        "name": payload.name,
        "email": payload.email,
        "organization": payload.organization,
        "urgency": payload.urgency,
        "message": payload.message,
        "language": payload.language,
        "ai_consent": payload.ai_consent,
        "status": "received",
        "created_at": datetime.now(timezone.utc),
    }
    try:
        await db.quote_requests.insert_one(doc)
    except Exception:
        logger.exception("Failed to store quote request %s", request_id)
        raise HTTPException(status_code=503, detail="storage_unavailable")

    subject, confirmation_html = _confirmation_html(payload)
    email_sent = await _send_email(payload.email, subject, confirmation_html)
    if NOTIFY_EMAIL:
        urgency_tag = URGENCY_TAGS[payload.language][payload.urgency]
        base = "Demande de devis Klonaris" if payload.language == "fr" else "Klonaris quote request"
        await _send_email(
            NOTIFY_EMAIL,
            f"[{urgency_tag}] {base} — {payload.name}",
            _notification_html(payload, request_id),
        )

    return QuoteRequestResponse(id=request_id, status="received", emailSent=email_sent)


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)
