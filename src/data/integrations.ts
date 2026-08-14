import { withBase } from './site';

function trimEnv(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

export function isPublicHttpUrl(value: string): boolean {
  if (!value) return false;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:';
  } catch {
    return false;
  }
}

export const publicCalUrl = trimEnv(import.meta.env.PUBLIC_CAL_URL);

export const publicContactFormEndpoint = trimEnv(
  import.meta.env.PUBLIC_CONTACT_FORM_ENDPOINT || import.meta.env.PUBLIC_FORM_ENDPOINT,
);

export const hasPublicCalUrl = isPublicHttpUrl(publicCalUrl);
export const hasContactFormEndpoint = isPublicHttpUrl(publicContactFormEndpoint);

export function bookingProviderName(url: string): string {
  if (!isPublicHttpUrl(url)) return 'an external booking calendar';
  try {
    const host = new URL(url).hostname.replace(/^www\./, '');
    if (host === 'cal.com' || host.endsWith('.cal.com')) return 'Cal.com';
    return 'an external booking calendar';
  } catch {
    return 'an external booking calendar';
  }
}

export function absoluteSiteUrl(path: string): string {
  const site = trimEnv(import.meta.env.PUBLIC_SITE_URL).replace(/\/$/, '');
  const relative = withBase(path);
  if (!site) return relative;
  if (relative.startsWith('http://') || relative.startsWith('https://')) return relative;
  return `${site}${relative.startsWith('/') ? relative : `/${relative}`}`;
}
