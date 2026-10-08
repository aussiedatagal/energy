import { useEffect } from 'react';
import type { CStep } from '../types';

interface Props {
  item: CStep;
  onClose: () => void;
}

function SourceLink({ name, url }: { name?: string; url?: string }) {
  if (!name) return null;
  return url ? (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {name}
    </a>
  ) : (
    <>{name}</>
  );
}

export function ProofModal({ item, onClose }: Props) {
  const p = item.proof!;
  const twoSources = !!p.quote2 && p.sourceUrl2 !== p.sourceUrl;

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
          {twoSources ? (
            <>
              <dt>Source 1</dt>
              <dd>
                <blockquote className="proof-quote">{p.quote}</blockquote>
                <p className="proof-source-name">
                  <SourceLink name={p.source} url={p.sourceUrl} />
                </p>
              </dd>
              <dt>Source 2</dt>
              <dd>
                <blockquote className="proof-quote">{p.quote2}</blockquote>
                <p className="proof-source-name">
                  <SourceLink name={p.source2} url={p.sourceUrl2} />
                </p>
              </dd>
            </>
          ) : (
            <>
              {p.quote && (
                <>
                  <dt>{p.quote2 ? 'Quote 1' : 'Quote'}</dt>
                  <dd>
                    <blockquote className="proof-quote">{p.quote}</blockquote>
                  </dd>
                </>
              )}
              {p.quote2 && (
                <>
                  <dt>Quote 2</dt>
                  <dd>
                    <blockquote className="proof-quote">{p.quote2}</blockquote>
                  </dd>
                </>
              )}
              <dt>Reference</dt>
              <dd>
                <SourceLink name={p.source} url={p.sourceUrl} />
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
