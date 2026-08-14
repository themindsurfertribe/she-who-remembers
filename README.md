# She Who Remembers website

Official production website for **She Who Remembers**. This repository is a static-first Astro project intended for GitHub Pages.

Development proceeds gate-by-gate. Marketing page content, copy, and service integrations belong to later gates.

## Architecture

The site is static HTML, CSS, and assets. There is no unnecessary client-side JavaScript. Booking uses a public calendar URL. Contact uses an HTML form POST to a public form endpoint. Secrets stay off the frontend. Payments, email APIs, newsletter backends, and analytics remain later, isolated work.

```text
src/
  assets/images/     processed images (lala, courses, book, backgrounds, editorial)
  components/        reusable UI
  layouts/           global document shell
  pages/             routes
  styles/            tokens + global CSS
  content/           future structured content

public/              files copied as-is to the build
  images/logos/
  images/social/
  images/misc/
  favicon/

reference/           source material; not public website assets
PROJECT-SOURCE/      copy, outlines, and notes for development
```

Astro only publishes files from `src/` (compiled) and `public/` (copied). `/reference` and `/PROJECT-SOURCE` stay in the repository for authors and are **not** included in the website build.

## Project TODO

REMOVE OR EXCLUDE `/style-guide` BEFORE PUBLIC LAUNCH.

## Local development

Requires Node.js 22.12 or later.

```bash
npm install
npm run dev
```

Then open the local URL printed in the terminal (typically `http://localhost:4321`).

## Commands

| Command           | Purpose                                      |
| ----------------- | -------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the local development server           |
| `npm run build`   | Build the static site into `dist/`           |
| `npm run preview` | Serve the production build locally           |

## Git Workflow

`main` is the stable production branch.

Development should proceed gate-by-gate. Each gate should:

1. Make focused changes
2. Validate the production build (`npm run build`)
3. Review the result
4. Commit the stable checkpoint
5. Then begin the next gate

Do not allow unrelated work to accumulate across gates.

A GitHub remote should be added only after a repository URL is supplied. Do not invent one.

## PROJECT SAFETY RULES

- Never commit secrets.
- Never expose private API keys through `PUBLIC_` environment variables. `PUBLIC_` values may be exposed to the browser.
- Never publish files directly from `/reference`.
- Never modify `/PROJECT-SOURCE` without explicit project instruction.
- Never casually delete or restructure existing project material.
- Run `npm run build` before checkpoint commits.
- Keep each gate focused on its stated scope.
- External services such as Stripe, email providers, and analytics must be integrated deliberately in later gates. Booking and contact use only frontend-safe public URLs when configured.
- Reference images are design source material, not automatically production assets.

## Future GitHub Pages deployment

Do not deploy until later gates are complete. When ready:

1. Create a GitHub repository and push this project (excluding ignored files).
2. Set `PUBLIC_SITE_URL` to the canonical production URL.
3. If the site will live at `https://<user>.github.io/<repo>/`, set `PUBLIC_BASE_PATH` to `/<repo>`. A custom domain or `username.github.io` user site can leave the base as `/`.
4. Add a GitHub Actions workflow using the official [Astro GitHub Pages](https://docs.astro.build/en/guides/deploy/github/) action.
5. In the repository Settings → Pages, choose GitHub Actions as the source.

`public/.nojekyll` is included so GitHub Pages will serve Astro’s `_astro` assets.

## Reference folder rules

`/reference` and `/PROJECT-SOURCE` are source material, not automatically public website assets.

- Do not delete, overwrite, move, rename, or restructure `/reference`, `/reference/photos`, `/reference/branding`, `/reference/inspiration`, `/reference/book`, or `/PROJECT-SOURCE`.
- Nothing under `/reference` should be exposed publicly unless it is deliberately copied into an approved production location (`src/assets/images/` or `public/images/`).
- Do not copy branding boards or other reference images into production assets until that is explicitly approved.

## Security

Secrets never belong in frontend code.

- Put real values only in a local `.env` file (gitignored) or in GitHub Actions secrets.
- In Astro, only variables prefixed with `PUBLIC_` are available in browser code. Use that prefix only for values that are safe to expose.
- Stripe secret keys, webhook secrets, email API keys, form signing secrets, and similar credentials must stay server-side.
- Never commit `.env`, API keys, passwords, payment credentials, or private client records.

See `.env.example` for placeholder variable names only.

## Booking and contact

These features are frontend-safe and optional. The production build succeeds if they are empty.

**Booking (`PUBLIC_CAL_URL`)**

- Public scheduling page URL (for example a Cal.com link).
- When set, `/book-a-conversation` shows a Choose a Time button that opens the provider in a new tab with `rel="noopener noreferrer"`.
- When empty, `/book-a-conversation` shows quiet preview copy that online scheduling is not active yet. No environment variable names, rebuild instructions, or broken links appear on the public page.
- This site does not send booking confirmation email. Phrase any copy as coming from the booking provider.
- Optional: in the provider dashboard, a redirect to `/booking-confirmed` can be added later. Do not assume that redirect exists until it is configured.

**Contact (`PUBLIC_CONTACT_FORM_ENDPOINT`)**

- Public HTML `POST` endpoint from a static-site form provider.
- `PUBLIC_FORM_ENDPOINT` is an older alias used only if the contact-specific variable is empty.
- When set, `/contact` posts Name, Email, Reason, and Message, then should redirect to `/thank-you` (configure `_next` / `redirect` on the provider).
- When empty, the form remains visible but disabled, with quiet copy that message submission is not active yet. No environment variable names, endpoint language, or rebuild instructions appear on the public page. There is no fake success state.
- Do not put signing secrets, API keys, or inboxes in `PUBLIC_` variables.
- The form is not for medical, psychiatric, legal, or crisis information.

Set `PUBLIC_SITE_URL` to the canonical production URL, including protocol. Contact-form thank-you redirects use this so the destination can be absolute.

**Canonical site URL (`PUBLIC_SITE_URL`)**

- Used by Astro `site` and by absolute redirects such as `/thank-you`.
- Leave empty in local preview if needed. The build still succeeds.

## Design tokens

Temporary brand values live in `src/styles/tokens.css` so colors, type, spacing, and related tokens can be changed in one place. They follow `/reference/branding/BRAND-DIRECTION.md` and are not the final identity.

Webfonts are loaded from [Google Fonts](https://fonts.google.com) in `src/layouts/BaseLayout.astro`:

- Cinzel Display: display / headings
- Lora: editorial body
- Montserrat: UI, labels, and controls

Font families are applied only through CSS tokens. Do not hard-code typefaces in components.

An internal review page lives at `/style-guide`. It is not a public marketing page and is served with `noindex`.

**TODO before public launch:** REMOVE OR EXCLUDE `/style-guide` BEFORE PUBLIC LAUNCH.

Visual balance for later design work:

- 70% clean editorial elegance
- 20% cosmic / sacred atmosphere
- 10% dramatic visual moments
