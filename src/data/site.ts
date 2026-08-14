export interface NavLink {
  label: string;
  href: string;
}

export const siteName = 'She Who Remembers';

export const primaryNav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Begin Here', href: '/begin-here' },
  { label: 'The Work', href: '/the-work' },
  { label: 'Courses', href: '/courses' },
  { label: 'Private Guidance', href: '/private-guidance' },
  { label: 'The Book', href: '/book' },
  { label: 'Letters', href: '/letters' },
  { label: 'About', href: '/about' },
];

export const mobileNav: NavLink[] = [
  ...primaryNav,
  { label: 'FAQ', href: '/faq' },
];

export const headerCta: NavLink = {
  label: 'Book a Conversation',
  href: '/book-a-conversation',
};

export const footerExplore: NavLink[] = [
  { label: 'Begin Here', href: '/begin-here' },
  { label: 'The Work', href: '/the-work' },
  { label: 'Courses & Experiences', href: '/courses' },
  { label: 'Private Guidance', href: '/private-guidance' },
  { label: 'She Who Remembers', href: '/book' },
  { label: 'Letters', href: '/letters' },
];

export const footerAbout: NavLink[] = [
  { label: 'About Lala', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
  { label: 'Book a Conversation', href: '/book-a-conversation' },
];

export const footerLegal: NavLink[] = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Coaching Disclaimer', href: '/coaching-disclaimer' },
  { label: 'Cancellation & Refund Policy', href: '/cancellation-refund-policy' },
  { label: 'Accessibility', href: '/accessibility' },
];

export function withBase(href: string): string {
  const base = import.meta.env.BASE_URL || '/';
  if (href === '/') {
    return base.endsWith('/') ? base : `${base}/`;
  }
  const prefix = base.endsWith('/') ? base.slice(0, -1) : base;
  return `${prefix}${href}`;
}

export function stripBase(pathname: string): string {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  let path = pathname.replace(/\/index\.html$/, '/');
  if (base && path.startsWith(base)) {
    path = path.slice(base.length) || '/';
  }
  if (path.length > 1) {
    path = path.replace(/\/$/, '');
  }
  return path || '/';
}

export function pathIsActive(currentPath: string, href: string): boolean {
  const current = stripBase(currentPath);
  const target = href === '/' ? '/' : href.replace(/\/$/, '');
  if (target === '/') {
    return current === '/';
  }
  return current === target || current.startsWith(`${target}/`);
}
