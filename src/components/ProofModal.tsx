import { useEffect } from 'react';
import type { CStep } from '../types';

interface Props {
  item: CStep;
  onClose: () => void;
}

export function ProofModal({ item, onClose }: Props) {
  const p = item.proof;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div
      className="proof-modal"
      aria-modal="true"
      role="dialog"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="proof-sheet">
        <button className="proof-close" aria-label="Close" onClick={onClose}>
          ×
        </button>
        <p className="proof-content-title">{item.label}</p>
        <dl className="proof-dl">
          <dt>Figure</dt>
          <dd>{p.primary}</dd>
          {p.quotes.length > 0 && (
            <>
              <dt>{p.quotes.length > 1 ? 'Sources' : 'Source'}</dt>
              <dd>
                {p.quotes.map((q, i) => (
                  <figure key={i} className="proof-figure">
                    <blockquote className="proof-quote">{q.text}</blockquote>
                    <figcaption className="proof-source-name">
                      <a href={q.source.url} target="_blank" rel="noopener noreferrer">
                        {q.source.title}
                      </a>
                      {q.page ? `, PDF page ${q.page}` : ''}
                    </figcaption>
                  </figure>
                ))}
              </dd>
            </>
          )}
          <dt>Result</dt>
          <dd>
            <strong>{p.result}</strong>
          </dd>
          {p.calc && (
            <>
              <dt>Calculation</dt>
              <dd>
                <code>{p.calc}</code>
              </dd>
            </>
          )}
          {p.note && (
            <>
              <dt>Notes</dt>
              <dd>{p.note}</dd>
            </>
          )}
        </dl>
      </div>
    </div>
  );
}
