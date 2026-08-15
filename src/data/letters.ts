import { getCollection, type CollectionEntry } from 'astro:content';

export type LetterEntry = CollectionEntry<'letters'>;

export async function getPublishedLetters(): Promise<LetterEntry[]> {
  const letters = await getCollection('letters', ({ data }) => !data.draft);
  return letters.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function letterSlug(letter: LetterEntry): string {
  return letter.id.replace(/\.md$/i, '');
}

export function formatLetterDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function readingMinutesFromText(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  if (words === 0) return 0;
  return Math.max(1, Math.round(words / 200));
}
