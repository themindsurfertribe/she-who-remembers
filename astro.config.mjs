import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { existsSync } from 'node:fs';
import { readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const site = process.env.PUBLIC_SITE_URL?.trim() || undefined;

const sitemapBlockedSegments = [
  'style-guide',
  'thank-you',
  'application-received',
  'booking-confirmed',
];

async function removeGitkeep(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await removeGitkeep(full);
    } else if (entry.name === '.gitkeep') {
      await rm(full);
    }
  }
}

function excludeInternalRoutes() {
  return {
    name: 'exclude-internal-routes',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const folder = path.join(root, 'style-guide');
        if (existsSync(folder)) {
          await rm(folder, { recursive: true, force: true });
          logger.info('Removed /style-guide from production output. View it with npm run dev.');
        }
        await removeGitkeep(root);
      },
    },
  };
}

export default defineConfig({
  output: 'static',
  site,
  base: process.env.PUBLIC_BASE_PATH || '/',
  integrations: [
    excludeInternalRoutes(),
    ...(site
      ? [
          sitemap({
            filter: (page) =>
              !sitemapBlockedSegments.some(
                (segment) => page.includes(`/${segment}/`) || page.endsWith(`/${segment}`),
              ),
          }),
        ]
      : []),
  ],
});
