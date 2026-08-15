# Launch checklist

Use this list before first public deployment. Do not mark an item complete unless the work is actually done. This is not a substitute for counsel, a brand lock, or live integrations.

Technical GitHub Pages hosting is not the same as permanent-domain launch. Do not mark public launch complete because a github.io project URL is live.

Last reviewed: August 15, 2026

## CONTENT

- [ ] Confirm Home, Begin Here, The Work, Courses, Private Guidance, About, Book, FAQ, Contact, and Book a Conversation still match approved copy.
- [ ] Publish at least one real Letter only when approved source copy exists. Do not invent essays.
- [ ] Confirm Letters empty-state copy is acceptable if no letters are ready at launch.
- [ ] Confirm 404 copy still feels on-brand.
- [ ] Remove or rewrite any remaining preview language once booking and contact are live.
- [ ] Confirm no placeholder pages remain in the public map (Letters is built; style-guide is stripped from production).

## BRAND

- [ ] Confirm temporary color tokens are still acceptable for launch.
- [ ] Confirm the geometric emblem is still the temporary header lockup.
- [ ] Favicon uses a simplified vector of the approved emblem. Revisit only if a later mark replaces it. Do not copy `/reference` boards into production.
- [ ] Add `public/images/social/og-default.png` (1200 x 630) with “She Who Remembers” and, if it fits, “Power, Presence, and Remembering Who You Are.” Elegant, not a reference-board screenshot.
- [ ] Optional: add `public/favicon/apple-touch-icon.png` (180 x 180). The layout will link it automatically when the file exists.
- [ ] Optional: add `public/favicon.ico` if a platform still requires ICO.
- [ ] Do not publish files from `/reference` or `/PROJECT-SOURCE`.

## SEO

- [ ] Set `PUBLIC_SITE_URL` to the real canonical URL (including protocol) before production indexing matters.
- [ ] Rebuild after setting `PUBLIC_SITE_URL` so canonical tags, Open Graph URLs, WebSite JSON-LD, and the sitemap can generate.
- [ ] Confirm sitemap files appear in `dist/` only after `PUBLIC_SITE_URL` is set.
- [ ] Confirm `robots.txt` includes a Sitemap line only after that URL is set.
- [ ] Spot-check unique titles and descriptions on public routes.
- [ ] Confirm confirmation pages and `/style-guide` remain `noindex`.
- [ ] Confirm `og:image` is present only after the social PNG exists. Do not invent a broken image URL.
- [ ] Do not add Person or Book structured data until ISBN, publication facts, and identity URLs are known.

## LEGAL

- [ ] Re-read Privacy, Terms, Coaching Disclaimer, Cancellation & Refund Policy, and Accessibility.
- [ ] Fill unknown legal fields (entity name, address, jurisdiction, refund windows) when they are real.
- [ ] Have counsel review if that is required for the business. These pages are website policy drafts, not legal advice.
- [ ] Update `policyLastUpdated` in `src/data/policies.ts` when policy wording changes. Do not let the build stamp a fake date.

## BOOKING

- [ ] Set `PUBLIC_CAL_URL` to the public scheduling page only when it is live.
- [ ] Confirm Book a Conversation shows Choose a Time with `target="_blank"` and `rel="noopener noreferrer"`.
- [ ] Confirm fallback copy disappears once the URL is set.
- [ ] Optional: configure the provider redirect to `/booking-confirmed` only if that flow is actually used.

## CONTACT

- [ ] Set `PUBLIC_CONTACT_FORM_ENDPOINT` to a public HTML POST endpoint only when delivery is live.
- [ ] Configure the provider to redirect successful submissions to `/thank-you` (absolute URL once `PUBLIC_SITE_URL` is set).
- [ ] Send a test message and confirm it arrives. Do not treat the preview form as a working inbox.
- [ ] Confirm the live form does not accept or request payment card data, medical records, or crisis disclosures.

## PAYMENTS

- [ ] Do not launch paid checkout until Stripe or another processor is intentionally integrated in a later gate.
- [ ] Fill cancellation and refund values in `src/data/policies.ts` before selling.
- [ ] Show price, what is included, and refund terms before purchase. Do not invent windows in advance.

## EMAIL

- [ ] Do not enable transactional or newsletter email until a later gate.
- [ ] Confirm this website does not send booking confirmation email. Phrase copy as coming from the calendar provider.

## ANALYTICS

- [ ] Do not add analytics until intentionally approved.
- [ ] If analytics are added later, update Privacy before launch of that tool.
- [ ] Do not add tracking cookies without updating Privacy and, if required, a consent pattern.

## DOMAIN

- [ ] Choose the production domain. Do not invent it in the repository before it exists.
- [ ] Set `PUBLIC_SITE_URL` to that domain.
- [ ] If using a GitHub Pages project URL, set `PUBLIC_BASE_PATH` to `/repo-name`. A custom domain can leave the base as `/`.

## GITHUB PAGES

Technical public-host deployment (Gate 13A) stays distinct from permanent production-domain launch.

- [x] Confirm the GitHub repository exists and `main` is the deploy branch.
- [ ] `.github/workflows/deploy.yml` is on `main` and builds with `npm ci` and `npm run build`.
- [ ] In repository Settings, Pages source is GitHub Actions.
- [ ] Set repository variables: `PUBLIC_CAL_URL`, `PUBLIC_CONTACT_FORM_ENDPOINT`, and `PUBLIC_BASE_PATH=/she-who-remembers`.
- [ ] Leave `PUBLIC_SITE_URL` unset until the lasting public origin is chosen.
- [x] Confirm `public/.nojekyll` is present.
- [ ] Public integration URLs live in repository variables, not Secrets. Do not store Proton, Cal.com, or Formspree logins in GitHub.
- [ ] Confirm `/style-guide` is absent from the deployed site.
- [ ] Confirm `/reference` and `/PROJECT-SOURCE` are not in the deployed site.
- [ ] After the technical Pages host is live, walk home, routes, booking, and contact there. Do not treat github.io as the canonical origin.

## MOBILE QA

- [ ] Review 320, 375, 768, 1024, 1280, and 1440 widths.
- [ ] Check header, mobile menu, footer, Letters, 404, forms, and policy headings.
- [ ] Confirm no horizontal overflow.
- [ ] Confirm tap targets remain usable.

## ACCESSIBILITY

- [ ] Keyboard: skip link, nav, FAQ details, Letters links, 404 actions, forms.
- [ ] Visible focus rings still appear.
- [ ] Reduced-motion setting still quiets animation.
- [ ] When images are added, informational images have real alt text; decorative images use empty alt.
- [ ] Re-test contact disabled or live states so status is not color-only.

## PERFORMANCE

- [ ] Keep the site static. Do not add animation libraries, carousels, or large video backgrounds.
- [ ] Optimize any new production images before commit.
- [ ] Confirm Google Fonts still load only the families already in use, unless a later gate self-hosts them.
- [ ] Spot-check Largest Contentful Paint on Home and Begin Here after any image is added.

## SECURITY

- [ ] Confirm `.env` is gitignored and not committed.
- [ ] Confirm no `PUBLIC_` variable holds a private secret.
- [ ] Confirm no API keys, payment credentials, or client records are in the repo.
- [ ] Confirm contact submissions are not logged in frontend code.
- [ ] Rotate any credential that was ever pasted into chat, email, or a ticket.

## FINAL SMOKE TEST

- [ ] `npm run build` succeeds.
- [ ] `npm run preview` and walk Home, Begin Here, a course page, Private Guidance, Book, Letters, FAQ, Contact, Book a Conversation, one policy page, and 404.
- [ ] Internal links resolve. No `/reference` or localhost URLs in public HTML.
- [ ] Booking and contact behave according to whether env values are set.
- [ ] Confirmation pages are reachable but not promoted as landing pages.

## POST-LAUNCH

- [ ] Request indexing only after `PUBLIC_SITE_URL`, robots, and sitemap are correct.
- [ ] Watch the contact path for a real test message.
- [ ] Watch booking for a real test appointment if scheduling is live.
- [ ] Note the first production issue in a single place and fix it on `main` through the usual gate discipline.
- [ ] Plan the next isolated gates: live booking URL, contact delivery, payments, email, analytics. Do not bundle them.
