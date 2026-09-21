# Klonaris — site vitrine

Site vitrine bilingue (FR/EN) de Klonaris, service belge de documentation technique.
Frontend **Vite + React 19 + TypeScript + Tailwind v4**, backend **FastAPI + MongoDB**
(formulaire de demande de devis), e-mails transactionnels via **Resend** (optionnel).

## Structure

```
backend/    FastAPI + motor (MongoDB async) + Pydantic v2 — endpoint /api/quote-requests
frontend/   Vite + React 19 + Tailwind v4 + react-router — pages dans src/pages, textes FR/EN dans src/i18n
tests/      Espace de tests e2e Playwright (pré-configuré)
```

## Prérequis

- Node.js 20+ et yarn
- Python 3.11+
- MongoDB (local ou distant)

## Lancement local

Backend (terminal 1) :

```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env   # puis renseigner les valeurs réelles
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

Frontend (terminal 2) :

```bash
cd frontend
yarn install
yarn dev               # http://localhost:3000
```

Le serveur de dev Vite redirige `/api/*` vers `http://localhost:8001` : le frontend
appelle toujours des chemins relatifs `/api`, jamais d'URL absolue.

## Variables d'environnement (backend/.env)

| Variable        | Rôle                                                        |
| --------------- | ----------------------------------------------------------- |
| `MONGO_URL`     | Chaîne de connexion MongoDB (obligatoire)                   |
| `DB_NAME`       | Nom de la base (obligatoire)                                |
| `CORS_ORIGINS`  | Origines autorisées, séparées par des virgules              |
| `APP_URL`       | URL publique du site                                        |
| `RESEND_API_KEY`| Clé API Resend (optionnelle — voir ci-dessous)              |
| `SENDER_EMAIL`  | Adresse d'expédition vérifiée dans Resend                   |
| `NOTIFY_EMAIL`  | Adresse recevant les notifications de demandes de devis     |

Un modèle avec des valeurs fictives est fourni : `backend/.env.example`.
Ne jamais committer le fichier `.env` réel ni aucune clé.

## Services externes

- **MongoDB** : obligatoire. Les demandes de devis y sont enregistrées
  (collection `quote_requests`).
- **Resend** : optionnel. Sans `RESEND_API_KEY` valide, les demandes sont tout de
  même enregistrées en base et l'utilisateur voit une confirmation, mais aucun
  e-mail (notification propriétaire ni confirmation visiteur) n'est envoyé.
  Pour l'activer : créer une clé sur resend.com, vérifier le domaine
  d'expédition, renseigner `RESEND_API_KEY` et `SENDER_EMAIL`.

## Vérifications

```bash
cd frontend && yarn typecheck   # vérification TypeScript (tsc -b)
cd backend && pytest            # tests backend (si présents)
```

## Build de production

```bash
cd frontend && yarn build       # génère frontend/dist
```

## Notes pour l'hébergement futur

- Servir le build frontend et le backend derrière une même origine, en
  conservant le préfixe `/api` pour le backend.
- Définir les variables d'environnement sur l'hébergeur (jamais dans le code).
- Après le choix du domaine définitif : réactiver une balise `<link rel="canonical">`
  dans `frontend/index.html` avec le domaine réel, puis compléter la section
  « Hébergement » des mentions légales et de la politique de confidentialité.
- Le contenu légal (CGV) reste une version de travail à valider avant publication.
