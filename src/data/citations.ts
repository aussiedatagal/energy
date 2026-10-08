import type { Quote, Source } from '../types';
import { CSTEPS } from './csteps';
import { TREEMAP_DATA } from './treemap';

export interface Citation {
  source: Source;
  quotes: Quote[];
}

const allQuotes = [
  ...CSTEPS.flatMap((d) => d.proof.quotes),
  ...TREEMAP_DATA.children.flatMap((c) => c.children.flatMap((l) => l.proof.quotes)),
];

export const CITATIONS: Citation[] = allQuotes.reduce<Citation[]>((list, q) => {
  const entry = list.find((c) => c.source.url === q.source.url);
  if (!entry) list.push({ source: q.source, quotes: [q] });
  else if (!entry.quotes.some((x) => x.text === q.text)) entry.quotes.push(q);
  return list;
}, []);
