import { useEffect } from 'react';
import type { CStep } from '../types';

interface Props {
  item: CStep;
  onClose: () => void;
}

export function ProofModal({ item, onClose }: Props) {
  const p = item.proof!;

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
          {p.quote && (
            <>
              <dt>Source</dt>
              <dd>{p.quote}</dd>
            </>
          )}
          {p.quote2 && (
            <>
              <dt>Source (continued)</dt>
              <dd>{p.quote2}</dd>
            </>
          )}
          <dt>Reference</dt>
          <dd>
            {p.sourceUrl ? (
              <a href={p.sourceUrl} target="_blank" rel="noopener noreferrer">
                {p.source}
              </a>
            ) : (
              p.source
            )}
          </dd>
          {p.source2 && (
            <>
              <dt>Reference (continued)</dt>
              <dd>
                {p.sourceUrl2 ? (
                  <a href={p.sourceUrl2} target="_blank" rel="noopener noreferrer">
                    {p.source2}
                  </a>
                ) : (
                  p.source2
                )}
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
