import { SOURCES } from '../data/sources';

export function Sources() {
  return (
    <section id="sources">
      <div className="section-inner">
        <h2>Sources</h2>
        <div className="sources-grid">
          {SOURCES.map((s) => (
            <div key={s.url} className="source-item">
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                {s.title}
              </a>
              <div className="source-what">{s.what}</div>
            </div>
          ))}
        </div>
        <p className="chart-note">
          Raw source pages can be fetched locally using <code>data/fetch_sources.py</code>.
          Structured data lives in <code>data/energy_data.json</code>. All figures should be
          verified against the primary sources linked above before citing.
        </p>
      </div>
    </section>
  );
}
