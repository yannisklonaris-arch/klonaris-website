import type { Dict } from "./fr";

export const en: Dict = {
  brand: { name: "KLONARIS", sub: "[ DOC.ENG // REV.2026 ]" },
  nav: {
    home: "Home",
    method: "How it works",
    about: "About",
    web: "Website creation",
    contact: "Contact",
    cta: "Request a quote",
    menu: "Menu",
    close: "Close",
  },
  home: {
    metaTitle: "Klonaris — Engineering technical documentation, structured and human-reviewed",
    metaDesc: "Klonaris turns long, messy engineering documents into concise, structured, professional documentation. AI-assisted, human-reviewed, quote-based pricing.",
    heroTag: "TECHNICAL DOCUMENTATION // HUMAN REVIEW",
    heroLines: ["Your technical", "documents,", "restructured", "with rigor."],
    heroSub: "Klonaris turns long, messy, poorly arranged engineering documents into concise, professional, ready-to-use deliverables — reports, technical files and PowerPoint presentations — AI-assisted, then systematically reviewed and verified personally.",
    ctaPrimary: "Request a quote",
    ctaSecondary: "See how it works",
    heroMeta: [
      { label: "AI-ASSISTED + HUMAN-REVIEWED" },
      { label: "CONFIDENTIALITY & DATA HANDLING", href: "/privacy" },
      { label: "QUOTE-BASED PRICING" },
    ],
    comparator: {
      tag: "DEMO",
      beforeLabel: "BEFORE",
      afterLabel: "AFTER",
      hint: "Drag to compare",
      ariaLabel: "Before and after comparator: use the left and right arrow keys to reveal the source documents or the final deliverable.",
      demoNote: "Illustrative demo — fictional data",
      afterStamp: "VERIFIED — HUMAN REVIEW",
      beforeCaption: "SOURCE DOCUMENTS",
      afterCaption: "FINAL PDF DELIVERABLE",
      docTitle: "TECHNICAL FILE",
      services: [
        "Technical summarization",
        "Structured summary",
        "Document restructuring",
        "Professional layout",
        "PDF deliverable",
        "PowerPoint presentations",
      ],
      servicesNote: "According to your needs and the quote",
      srcLabels: { shot: "Screenshot", notes: "Notes", pdf: "PDF", docx: "DOCX", excerpt: "Excerpt" },
    },
    problems: {
      tag: "THE PROBLEMS",
      title: "Technical documents everyone endures",
      sub: "Four problems every engineering team recognizes — and that Klonaris solves.",
      items: [
        {
          n: "P-01",
          title: "Diluted information",
          text: "Critical information drowns in hundreds of pages. Essential specifications become unfindable exactly when you need them.",
        },
        {
          n: "P-02",
          title: "Structural chaos",
          text: "Sections without hierarchy, inconsistent numbering, orphaned appendices: the document exists, but nobody can navigate it anymore.",
        },
        {
          n: "P-03",
          title: "Unverified AI output",
          text: "AI alone invents, omits and rephrases without guarantee. In engineering, one approximation can cost an audit — or worse.",
        },
        {
          n: "P-04",
          title: "Non-standard delivery",
          text: "Every document has its own format. Nothing is ready for a serious review, submission or archival.",
        },
      ],
    },
    benefits: {
      tag: "BENEFITS",
      title: "What you gain",
      items: [
        {
          title: "Systematic human review",
          text: "Every deliverable is personally reviewed and verified. AI accelerates; the human validates.",
        },
        {
          title: "Time handed back to your teams",
          text: "Your engineers focus on design. Document cleanup no longer monopolizes anyone.",
        },
        {
          title: "Deliverables structured to ease your document reviews",
          text: "Coherent structure, clean tables, final PDF with clickable contents: a document you can present without blushing.",
        },
        {
          title: "An investment that pays for itself",
          text: "Every hour your engineers don't spend cleaning up documents is an hour handed back to design. Detailed, no-commitment quote, known before any work begins.",
        },
      ],
    },
    confidentiality: {
      tag: "CONFIDENTIALITY",
      title: "Your documents stay yours",
      sub: "Trust is not a marketing claim: it is a protocol.",
      items: [
        {
          title: "Confidentiality commitment",
          text: "A non-disclosure agreement (NDA) can be signed before any document is exchanged.",
        },
        {
          title: "Supervised AI usage",
          text: "AI serves as an assistance tool; the tools used and their terms are specified before any documents are transferred, and every deliverable is personally reviewed.",
        },
        {
          title: "Data handling",
          text: "Data minimized, never sold, handled in line with the European regulation.",
        },
        {
          title: "Post-project purge",
          text: "Your source and intermediate files are deleted after the engagement is closed, unless otherwise agreed.",
        },
      ],
      cta: "Read the privacy policy",
    },
    finalCta: {
      title: "A document that deserves better?",
      sub: "Describe your need. You get a personal reply and a detailed quote — no commitment.",
      cta: "Request a quote",
    },
  },
  marquee: ["TECHNICAL SUMMARIZATION", "RESTRUCTURING", "ORGANIZATION", "FINAL PDF", "HUMAN REVIEW", "CONFIDENTIALITY"],
  how: {
    metaTitle: "How it works — Klonaris",
    metaDesc: "Seven transparent steps: describe your request, transfer via Microsoft OneDrive, custom quote, written confirmation, full payment before work begins, personally reviewed hybrid processing, delivery.",
    tag: "HOW IT WORKS",
    title: "Seven steps, zero surprises",
    sub: "A simple, transparent process from first exchange to final delivery. You always know where your document stands — and what you are paying.",
    steps: [
      {
        n: "01",
        title: "Describe your request",
        text: "You describe your document — report, technical file or PowerPoint presentation — and your goals through the form. Free initial exchange, no commitment, no documents needed.",
      },
      {
        n: "02",
        title: "Transfer via Microsoft OneDrive",
        text: "Once confidentiality terms are defined, I give you access to a limited-access Microsoft OneDrive folder: you upload the documents needed to assess the engagement.",
      },
      {
        n: "03",
        title: "Estimate and quote",
        text: "I assess the workload from your documents. You receive a detailed quote: scope, deliverables, timeline and price.",
      },
      {
        n: "04",
        title: "Written confirmation",
        text: "You confirm the quote by email, clearly and in writing. Nothing starts without your approval.",
      },
      {
        n: "05",
        title: "Full payment",
        text: "Work begins once 100% of the quote amount is received. Firm price, known in advance, no surprises.",
      },
      {
        n: "06",
        title: "Supervised hybrid processing",
        text: "AI tools (Anthropic's Claude and/or OpenAI, chosen per engagement) accelerate summarization and restructuring; every section is then personally reviewed and corrected.",
      },
      {
        n: "07",
        title: "Delivery",
        text: "You receive the deliverable in line with the quote — polished PDF, PowerPoint presentation or structured sources. A reasonable set of revisions, defined in the quote, is included. Your source files are deleted after the engagement is closed, unless otherwise agreed in writing.",
      },
    ],
    humanBadge: "HUMAN-IN-THE-LOOP",
    humanLoop: {
      tag: "WHY HUMAN REVIEW",
      title: "AI alone does not pass a technical audit",
      points: [
        "A generative AI can invent a standard reference, shift a decimal or smooth over a contradiction — with perfect confidence.",
        "Every Klonaris deliverable is personally reviewed and verified: values checked, inconsistencies flagged, omissions traced.",
        "AI is an acceleration tool, never a substitute. This position is stated in writing in every quote.",
      ],
    },
    cta: "Start an assessment",
  },
  about: {
    metaTitle: "About — Klonaris",
    metaDesc: "Klonaris is an independent technical documentation practice. Precision, transparency about AI usage, integrity without invented references.",
    tag: "ABOUT",
    title: "Why Klonaris exists",
    founderTag: "THE FOUNDER",
    founderTitle: "A technical eye, not a sales pitch",
    founderText: "Klonaris is an independent, one-person practice: every engagement is handled personally, from the first exchange to the final review. No inflated titles, no embellished track record — ongoing engineering training, daily practice of technical documentation, and one simple requirement: a document must be as rigorous as what it describes.",
    imageCaption: "PRECISION WORK // WORKSHOP",
    manifestoTag: "MANIFESTO",
    manifesto: [
      "Engineering projects produce mountains of documents. Most are written in a hurry, never reviewed, and become unreadable at the exact moment they should be useful.",
      "AI tools promise to summarize everything in one click. In reality, an unverified summary moves the problem: it produces smooth text nobody can rely on.",
      "Klonaris starts from the opposite principle: the machine does the heavy lifting, the human signs. Every delivered document has been read, verified and corrected by someone who understands what they are reading.",
    ],
    pillarsTag: "PRINCIPLES",
    pillars: [
      { n: "I", title: "Precision", text: "A value, a unit, a reference: each point is personally verified before delivery, and any inconsistency found is flagged." },
      { n: "II", title: "Transparency", text: "AI usage is acknowledged and documented. You know exactly how your document was produced." },
      { n: "III", title: "Integrity", text: "No invented client references, no fabricated numbers, no usurped degrees. Trust is built differently." },
    ],
    cta: "Work with Klonaris",
  },
  web: {
    metaTitle: "Website creation — Klonaris",
    metaDesc: "Klonaris designs modern, fast showcase websites that adapt to every screen, for SMEs, freelancers, shops and craftspeople. Clear pricing, no mandatory subscription.",
    tag: "WEBSITE CREATION",
    title: "Your professional website, made simple.",
    sub: "Klonaris designs modern, fast showcase websites that adapt to every screen, with clear pricing and no mandatory subscription.",
    cta: "Request a quote",
    pricing: {
      tag: "PRICING",
      title: "Simple, transparent pricing",
      from: "From €400",
      items: [
        { label: "1 page", price: "from €400" },
        { label: "Each additional page", price: "+€100" },
      ],
      note: "The final price depends on the features and scope defined in the quote.",
    },
    included: {
      tag: "WHAT'S INCLUDED",
      title: "Everything you need to be online",
      items: [
        "Professional design",
        "Works on desktop, tablet and smartphone",
        "Clear, fast navigation",
        "Guided go-live",
        "Source code handed over to you",
        "The website belongs to you",
        "Domain and hosting in your name",
        "No mandatory Klonaris subscription",
      ],
      note: "Future modifications are carried out only on request and are covered by a separate quote.",
    },
    ownership: {
      tag: "OWNERSHIP & HOSTING",
      title: "Your website belongs to you.",
      text: "The domain name, hosting and technical accounts used to run the site can be created directly in your name. Klonaris handles the initial setup and go-live. You remain the owner of your website and its source code.",
    },
    types: {
      tag: "WHO IS IT FOR?",
      title: "For which professionals?",
      items: [
        "Restaurants and cafés",
        "Bakeries and shops",
        "Hairdressers and beauty salons",
        "Craftspeople",
        "Freelancers",
        "SMEs",
        "Associations and professional organisations",
      ],
    },
    finalCta: {
      title: "Need a website?",
      sub: "Tell us about your project and receive a proposal tailored to your needs.",
      cta: "Request a quote",
    },
  },
  contact: {
    metaTitle: "Contact & quote — Klonaris",
    metaDesc: "Describe your technical document and get a personal reply as soon as possible. No files needed at this stage: secure transfer happens after an initial exchange.",
    tag: "CONTACT & QUOTE",
    title: "Request a quote",
    sub: "Describe your document and goals. Personal reply as soon as possible. No files are needed at this stage.",
    form: {
      name: "Full name",
      email: "Professional email",
      organization: "Organization (optional)",
      message: "Your document and your need",
      urgency: "Desired turnaround",
      messagePlaceholder: "Document type (report, technical file, PowerPoint presentation…), current state, objective, specific constraints…",
      privacyNote: "By sending, this information is transmitted to us and stored to process your request.",
      aiConsent: "I understand that Klonaris may use artificial intelligence tools as part of its services. This box is not an authorization to transfer documents: the applicable processing and confidentiality terms will be specified before any transfer.",
      aiConsentRequired: "Please first confirm that you have read the note about the possible use of AI tools.",
      submit: "Send the request",
      sending: "Sending…",
      successTitle: "Request sent",
      successMsg: "Your request has been received. Personal reply as soon as possible.",
      errorMsg: "Sending failed. Please try again or write directly to yannis.klonaris@outlook.be.",
    },
    urgencies: { standard: "Standard", priority: "Priority", critical: "Critical" },
    direct: { title: "Direct contact", emailLabel: "Email", phoneLabel: "Phone", responseTime: "Reply as soon as possible" },
    handoff: {
      title: "Secure transfer",
      text: "After an initial exchange and once confidentiality terms are defined, the documents needed to assess the engagement are exchanged in a limited-access Microsoft OneDrive folder. A confidentiality agreement can be established before any transfer.",
    },
  },
  privacy: {
    metaTitle: "Privacy policy — Klonaris",
    metaDesc: "Data controller, data collected, purposes, legal bases, retention periods, processors, non-EEA transfers and GDPR rights — Belgian Data Protection Authority (APD/GBA).",
    tag: "PRIVACY",
    title: "Privacy policy",
    updated: "LAST UPDATED // SEPTEMBER 2026",
    sections: [
      {
        h: "Data controller",
        t: "The data controller is Klonaris — Yannis Klonaris, sole proprietor (natural person), Avenue Grand'Peine 27, 1428 Braine-l'Alleud, Belgium, BCE/KBO 1042.152.360, VAT BE1042.152.360. Privacy contact: yannis.klonaris@outlook.be — +32 470 81 49 11.",
      },
      {
        h: "Data collected",
        t: "Contact: this site's form transmits your answers to us, stored securely for the time needed to process your request: name, email address, organization (optional), desired turnaround and a description of your need. Engagements: the documents and content you send after an initial exchange, and our correspondence. Billing: the data needed to issue and legally retain invoices and supporting documents. Browsing: this site sets no cookies and uses no third-party analytics or tracking; your language choice is stored locally in your browser (functional storage, not transmitted). Logs: the server keeps technical operation logs, which may temporarily contain transmitted information (such as email address), used for diagnostics only.",
      },
      {
        h: "Purposes",
        t: "Answering contact and quote requests; preparing quotes; performing engagements; managing the business relationship; meeting our legal obligations, including accounting and tax.",
      },
      {
        h: "Legal bases",
        t: "Pre-contractual measures taken at your request and performance of the contract (Art. 6.1.b GDPR); compliance with legal obligations (Art. 6.1.c); legitimate interest in answering enquiries and securing our exchanges (Art. 6.1.f).",
      },
      {
        h: "Retention periods",
        t: "Unanswered requests: twelve months maximum. Documents shared during an engagement: deleted after delivery and closure of the engagement, unless otherwise agreed in writing. Billing data and accounting records: seven years, in line with applicable Belgian legal obligations (Art. III.86 of the Code of Economic Law; certain tax documents may require longer retention).",
      },
      {
        h: "Recipients and processors",
        t: "Your data is never sold or shared for commercial purposes. Certain technical providers may process data where necessary for the service: site hosting provider [TO BE COMPLETED BEFORE PUBLICATION: final host], transactional email service (Resend), file storage and exchange space (Microsoft OneDrive), artificial intelligence tools used as assistance instruments (Claude — Anthropic and/or OpenAI, depending on the engagement). Such processing takes place on the infrastructures of the providers concerned and is governed by their terms and the applicable data-protection safeguards; the terms specific to your engagement are specified before any documents are transferred.",
      },
      {
        h: "Use of AI tools",
        t: "Artificial intelligence tools may be used as assistance instruments — Anthropic's Claude (via its Playground) and/or OpenAI (via its API), the model choice depending on the engagement. Every deliverable is personally reviewed and verified. The conditions under which these tools process content, including any options to opt out of model training, depend on the providers selected and are specified before any documents are transferred.",
      },
      {
        h: "Transfers outside the EEA",
        t: "Some technical providers may process data outside the European Economic Area. The applicable safeguarding mechanisms (adequacy decision, European Commission standard contractual clauses) are specified before mission documents are transferred. [TO BE VERIFIED BEFORE PUBLICATION: effective safeguards of the selected providers before the first engagement.]",
      },
      {
        h: "Your rights",
        t: "You have the rights of access, rectification, erasure, restriction, portability and objection. To exercise them, write to yannis.klonaris@outlook.be mentioning “GDPR”. You may lodge a complaint with the Belgian Data Protection Authority (APD/GBA), Rue de la Presse 35, 1000 Brussels:",
        href: "https://www.autoriteprotectiondonnees.be",
        linkText: "autoriteprotectiondonnees.be",
      },
      {
        h: "Updates",
        t: "This policy was last updated in September 2026. Any change is published on this page.",
      },
    ],
  },
  legal: {
    metaTitle: "Legal notice — Klonaris",
    metaDesc: "Klonaris legal notice: publisher, hosting, intellectual property, quote-based services, Belgian law.",
    tag: "LEGAL NOTICE",
    title: "Legal notice",
    updated: "LAST UPDATED // SEPTEMBER 2026",
    sections: [
      {
        h: "Site publisher",
        t: "This site is published by Klonaris — Yannis Klonaris, sole proprietor (natural person), established in Belgium. Professional address: Avenue Grand'Peine 27, 1428 Braine-l'Alleud, Belgium. Activity start date: 6 September 2026. Enterprise number (BCE/KBO): 1042.152.360. VAT number: BE1042.152.360 — special VAT exemption scheme for small enterprises. Contact: yannis.klonaris@outlook.be — +32 470 81 49 11.",
      },
      {
        h: "Publication director",
        t: "Yannis Klonaris.",
      },
      {
        h: "Hosting",
        t: "[TO BE COMPLETED BEFORE PUBLICATION: name and contact details of the site host, once final hosting is chosen].",
      },
      {
        h: "Intellectual property",
        t: "The documents you send remain your property. Exploitation rights in the deliverables produced during an engagement are governed by the terms and conditions and the quote [TO BE COMPLETED BEFORE PUBLICATION: exact scope of the transfer]. The content of this site — text, the Klonaris name and logo, graphic elements — is protected; any reproduction without written permission is prohibited.",
      },
      {
        h: "Services and quotes",
        t: "All services are performed on a quote basis. The quote specifies scope, deliverables, timeline and price. Work starts after written acceptance of the quote and full payment of the price (100% on ordering). Klonaris operates under the special VAT exemption scheme for small enterprises: Belgian VAT is not charged on services covered by this scheme. The applicable terms and conditions are available on the “Terms and conditions” page.",
      },
      {
        h: "Limitation of liability",
        t: "Klonaris analyzes, summarizes, restructures and presents technical documentation, with human review. Klonaris performs no certification, approval, conformity validation or engineering technical validation of documents. Responsibility for final validation of technical content is defined contractually with the client.",
      },
      {
        h: "Applicable law",
        t: "This site and its use are governed by Belgian law. Any dispute falls to the courts of [TO BE COMPLETED BEFORE PUBLICATION: jurisdiction], subject to mandatory applicable rules.",
      },
    ],
  },
  terms: {
    metaTitle: "Terms and conditions — Klonaris",
    metaDesc: "Klonaris B2B terms of service: quotes, full payment on ordering, timelines, delivery, revisions, confidentiality, intellectual property, liability, Belgian law.",
    tag: "TERMS AND CONDITIONS",
    title: "Terms and conditions of service",
    updated: "WORKING DRAFT // SEPTEMBER 2026 — [TO BE VALIDATED BEFORE PUBLICATION]",
    sections: [
      {
        h: "Article 1 — Purpose and scope",
        t: "These terms apply to every technical documentation engagement entrusted to Klonaris — Yannis Klonaris, sole proprietor (natural person), Avenue Grand'Peine 27, 1428 Braine-l'Alleud, Belgium, BCE/KBO 1042.152.360, VAT BE1042.152.360 — by a professional client (B2B) and prevail over any other document unless otherwise agreed in writing. The service consists of analyzing, summarizing, restructuring, organizing and presenting technical documentation, with human review. It constitutes no certification, approval, conformity validation or engineering technical validation.",
      },
      {
        h: "Article 2 — Quote and formation of the contract",
        t: "The client makes contact; the necessary documents are transferred so the volume and complexity can be assessed; Klonaris then issues a personalized quote specifying scope, deliverables, timeline, price and payment terms. The contract is formed upon written acceptance of the quote and full payment of the price.",
      },
      {
        h: "Article 3 — Price and payment",
        t: "The price is firm and set by the quote. It is payable in full (100%) on ordering; work begins upon receipt of payment. Unless the quote states otherwise, the invoice issued on ordering is payable within 14 days. Any late payment automatically triggers, without formal notice, the late-payment interest and fixed compensation provided by the Belgian law of 2 August 2002 on combating late payment in commercial transactions. Klonaris operates under the special VAT exemption scheme for small enterprises: Belgian VAT is not charged on services covered by this scheme.",
      },
      {
        h: "Article 4 — Timelines",
        t: "Timelines are stated in the quote and run from receipt of full payment and of all necessary documents. Any delay attributable to the client or to force majeure extends the timelines accordingly.",
      },
      {
        h: "Article 5 — Delivery",
        t: "The deliverable is handed over by the means agreed in the quote. [TO BE COMPLETED BEFORE PUBLICATION: precise handover and acknowledgement procedures.]",
      },
      {
        h: "Article 6 — Modification requests",
        t: "A reasonable set of modifications, within the initial scope of the quote, is included. Any out-of-scope modification is subject to an additional quote or amendment. Corrections of errors attributable to Klonaris are not modification requests: they fall under Klonaris' commitments.",
      },
      {
        h: "Article 7 — Client obligations",
        t: "The client provides complete and lawful documents, warrants holding the necessary rights over the documents transferred, and answers clarification requests within a reasonable time.",
      },
      {
        h: "Article 8 — Confidentiality",
        t: "Both parties undertake to preserve the confidentiality of exchanged information. A non-disclosure agreement may be established before any document transfer. [TO BE DECIDED BEFORE PUBLICATION: duration of the confidentiality obligation after the end of the engagement — e.g. 5 years.]",
      },
      {
        h: "Article 9 — Handling of documents and data",
        t: "Documents and data are processed in accordance with this site's privacy policy. Source and intermediate files are deleted after the engagement is closed, unless otherwise agreed in writing.",
      },
      {
        h: "Article 10 — Intellectual property",
        t: "The client retains all rights over the documents transferred. Exploitation rights in the deliverables are assigned to the client after full payment of the price [TO BE COMPLETED BEFORE PUBLICATION: exact scope of the assignment — rights concerned, territory, duration]. The Klonaris name, logo and working methods remain the exclusive property of Klonaris.",
      },
      {
        h: "Article 11 — Technical providers and AI tools",
        t: "Klonaris may use technical providers (hosting, cloud storage, artificial intelligence tools) governed by the applicable contractual and data-protection safeguards. Every deliverable undergoes human review.",
      },
      {
        h: "Article 12 — Liability and limits",
        t: "Klonaris is bound by a best-efforts obligation. Klonaris performs no engineering technical validation or certification: unless the quote states otherwise, final validation of technical content rests with the client. Klonaris' liability is limited to [TO BE COMPLETED BEFORE PUBLICATION: cap — e.g. the total quote amount] and indirect damages are excluded, within the limits permitted by Belgian law.",
      },
      {
        h: "Article 13 — Termination and cancellation",
        t: "[TO BE COMPLETED BEFORE PUBLICATION: treatment of the amounts paid in case of cancellation before work begins — refundable or not]; during an engagement, work performed is due pro rata. In case of serious breach, termination may occur after a formal notice remaining without effect for [TO BE DECIDED BEFORE PUBLICATION: period — e.g. 15 days].",
      },
      {
        h: "Article 14 — Force majeure",
        t: "Obligations are suspended in case of force majeure within the meaning of Belgian law; if the event extends beyond [TO BE DECIDED BEFORE PUBLICATION: duration — e.g. 60 days], either party may terminate the contract without compensation.",
      },
      {
        h: "Article 15 — Applicable law and disputes",
        t: "These terms are governed by Belgian law. The parties first seek an amicable settlement. Failing that, the courts of [TO BE COMPLETED BEFORE PUBLICATION: jurisdiction] have jurisdiction, subject to mandatory applicable rules.",
      },
    ],
  },
  notFound: {
    title: "404 — Section not found",
    text: "This page does not exist in the blueprint.",
    cta: "Back to home",
  },
  footer: {
    tagline: "Engineering technical documentation — summarization, restructuring, organization, final PDFs. AI-assisted, human-reviewed.",
    navTitle: "NAVIGATION",
    legalTitle: "LEGAL",
    privacyLink: "Privacy",
    legalLink: "Legal notice",
    termsLink: "Terms and conditions",
    badge: "Contractual confidentiality — NDA on request",
    stamp: "SEC-00 // GRID-40",
    rights: "© 2026 Klonaris — Yannis Klonaris · BCE/KBO 1042.152.360 · VAT BE1042.152.360 · All rights reserved.",
  },
};
