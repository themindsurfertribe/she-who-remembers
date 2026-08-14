import { defineConfig } from 'astro/config';

// Static-first site for GitHub Pages.
// Set PUBLIC_SITE_URL in a local .env before launch (see .env.example).
// If deploying to a project Pages URL (username.github.io/repo-name/),
// also set PUBLIC_BASE_PATH to '/repo-name'.
export default defineConfig({
  output: 'static',
  site: process.env.PUBLIC_SITE_URL,
  base: process.env.PUBLIC_BASE_PATH || '/',
});
