# Klonaris — Notes de travail juridiques (HORS CONTENU PUBLIC)

Document de travail interne — ne pas publier. Date : 2026-09-18.

## 1. Constats d'inspection technique (vérifiés dans le code)
- Formulaire : `POST /api/quote-requests` → enregistrement MongoDB (`quote_requests` : nom, e-mail, organisation, urgence, message, langue, consentement IA, statut, date) → tentative d'envoi Resend (notification propriétaire + confirmation visiteur). Honeypot anti-spam. Aucun upload de fichiers.
- Resend : `RESEND_API_KEY` est **VIDE** dans `backend/.env` (`SENDER_EMAIL` et `NOTIFY_EMAIL` remplis) → aucun e-mail ne part actuellement ; la persistance MongoDB fonctionne.
- Frontend : aucun cookie, aucun analytics/tracker tiers, aucune ressource externe (pas de Google Fonts/CDN). Seul `localStorage["klonaris-lang"]` (fonctionnel). Promesse « aucun cookie / aucun suivi tiers » vérifiée dans le code du site.
- Journaux : les logs techniques du backend peuvent contenir l'adresse e-mail du demandeur lorsqu'un envoi est sauté (diagnostic). Durée de conservation des logs inconnue (gérée par la plateforme d'hébergement).
- Environnement de prévisualisation : la plateforme injecte son propre overlay (`/__emergent_overlay__/health`) — hors code du site. L'hébergeur juridique définitif ne peut pas être déduit du domaine de prévisualisation. Ré-audit à faire après déploiement.
- `index.html` : balise canonical pointe vers l'URL de prévisualisation → à mettre à jour au déploiement.
- Aucun fichier CGV final trouvé dans le projet (pas de PDF/DOCX/MD) → la version du site est la seule existante.

## 2. Modifications appliquées (2026-09-18, FR + EN)
- Identité complète : adresse Avenue Grand'Peine 27, 1428 Braine-l'Alleud ; BCE/KBO 1042.152.360 ; TVA BE1042.152.360 ; régime de franchise (mentions légales, confidentialité, CGV art. 1, pied de page).
- Franchise TVA : mention « la TVA belge n'est pas facturée sur les prestations couvertes par ce régime » (mentions légales + CGV art. 3). Ni taux 0 %, ni exonération générale.
- Marketing harmonisé : « livrables structurés pour faciliter vos revues documentaires », « structure cohérente », « relu et vérifié personnellement », méthode de vérification décrite au lieu de « Rien n'est approximatif », « formation en cours en ingénierie », badge « CONFIDENTIALITÉ ET TRAITEMENT DES DONNÉES » (lien vers la politique), « réponse personnelle dans les meilleurs délais » (site + e-mails automatiques).
- OneDrive + IA : « dossier Microsoft OneDrive à accès limité » (méthode, contact, e-mail de confirmation) ; outils nommés (Claude — Anthropic via Playground, OpenAI via API, choix selon mission) ; traitements sur infrastructures des fournisseurs ; case consentement IA précisée comme ne valant pas autorisation de transmission.
- Confidentialité : catégories distinguées (contact / mission / facturation / navigation / journaux) ; conservation comptable 7 ans (art. III.86 CDE, sources CNC-CBN + SPF Économie) ; transferts hors EEE présentés conditionnellement avec placeholder de vérification.
- CGV : art. 3 clarifié (facture émise à la commande payable sous 14 jours, travaux à réception du paiement) ; art. 6 distingue corrections d'erreurs imputables à Klonaris des modifications hors périmètre. Avertissement VERSION DE TRAVAIL conservé.

## 3. Propositions de clauses à VALIDER (non appliquées) — compatibilité droit belge B2B
- **Art. 8 — Durée de confidentialité** : « Les obligations de confidentialité subsistent cinq (5) ans après la fin de la mission. » (standard B2B, libre aux parties)
- **Art. 10 — Cession des livrables** : « Les droits patrimoniaux d'auteur nécessaires à l'exploitation des livrables (reproduction, communication au public, adaptation) sont cédés au client, pour le monde entier et pour toute la durée légale de protection, à compter du paiement intégral du prix. » (le droit belge — art. XI.167 CDE — exige une cession écrite et déterminée par mode d'exploitation)
- **Art. 12 — Plafond de responsabilité** : « La responsabilité de Klonaris est limitée au montant total du devis. Sont exclus les dommages indirects. Cette limitation ne s'applique pas en cas de dol, de faute intentionnelle ou de dommages corporels. » (les exclusions de faute lourde/dol et dommages corporels sont indérogeables en droit belge)
- **Art. 13 — Annulation** : « En cas d'annulation par le client avant le début des travaux, les sommes versées sont remboursées, déduction faite d'une indemnité forfaitaire de [10–20 %] couvrant les frais d'organisation ; après le début des travaux, les travaux réalisés sont dus au prorata. » (B2B : liberté contractuelle, indemnité raisonnable)
- **Art. 13 — Mise en demeure** : 15 jours. **Art. 14 — Force majeure** : 60 jours. (valeurs usuelles, libres)
- **Art. 15 + Mentions légales — Tribunal compétent** : « le tribunal de l'entreprise du Brabant wallon (Nivelles) » (ressort du siège, Braine-l'Alleud ; clauses attributives de juridiction valables en B2B)

## 4. Questions ouvertes (à trancher par Yannis)
1. Clé Resend : fournir une nouvelle `RESEND_API_KEY` (l'ancienne, exposée dans l'historique de chat, doit être révoquée/rotée dans Resend). Sans clé : aucune notification ni confirmation e-mail.
2. Hébergeur définitif du site (nom + coordonnées) pour les mentions légales et la politique.
3. CGV : existe-t-il une version finale rédigée hors de ce projet ? Aucune trouvée dans les fichiers. Sinon, valider les 6 propositions de clauses ci-dessus.
4. Conservation : confirmer le choix « 12 mois » pour les demandes sans suite et organiser son application (suppression effective) ; pour les fichiers de mission, donner une durée ou des critères précis (texte actuel : suppression après clôture — réalité des corbeilles/sauvegardes OneDrive et fournisseurs à vérifier).
5. Garanties des fournisseurs (Resend, Microsoft OneDrive, Anthropic, OpenAI) : vérifier DPA et mécanismes de transfert hors EEE avant la première mission (placeholder conservé dans la politique).
6. Engagement de délai de réponse : conserver « dans les meilleurs délais » ou fixer un délai réel tenable ?

## 5. Points bloquants avant de considérer les pages légales comme finalisées
- Hébergeur définitif manquant (mentions légales + politique).
- 6 clauses CGV en placeholder (cession, plafond, annulation, confidentialité, mise en demeure/force majeure, tribunal).
- Garanties hors-EEE des fournisseurs non vérifiées.
- Application effective des durées de conservation à organiser.
- Relève par un professionnel du droit belge recommandée avant publication.
- Opérationnel (non juridique) : clé Resend absente → e-mails non fonctionnels.
