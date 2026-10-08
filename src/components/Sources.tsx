import { CITATIONS } from '../data/citations';

export function Sources() {
  return (
    <section id="sources">
      <div className="section-inner">
        <h2>Sources</h2>
        <div className="sources-grid">
          {CITATIONS.map(({ source, quotes }) => (
            <div key={source.url} className="source-item">
              <a href={source.url} target="_blank" rel="noopener noreferrer">
                {source.title}
              </a>
              {quotes.map((q) => (
                <blockquote key={q.text} className="source-quote">
                  {q.text}
                  {q.page ? <span className="source-page"> (PDF page {q.page})</span> : null}
                </blockquote>
              ))}
            </div>
          ))}
        </div>
        <p className="chart-note">
          Every quote above was checked word for word against the linked source in October 2026.
        </p>
      </div>
    </section>
  );
}
