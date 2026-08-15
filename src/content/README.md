# Letters

Markdown files in `src/content/letters/` become public pages at `/letters/[slug]`.

Required frontmatter:

- `title`
- `pubDate` (for example `2026-08-14`)

Optional:

- `description` (listing excerpt)
- `seoDescription` (falls back to `description`, then to the title)
- `category` (essay, field note, reflection, and similar)
- `draft` (`true` keeps the letter out of production)

Do not invent published essays. Draft files are omitted from the production listing and from `/letters/[slug]` routes.

The filename becomes the slug: `on-self-trust.md` is `/letters/on-self-trust`.
