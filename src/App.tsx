import { useEffect, useState } from 'react';
import { BigPicture } from './components/BigPicture';
import { ComparisonSection } from './components/ComparisonSection';
import { ProofModal } from './components/ProofModal';
import { Sources } from './components/Sources';
import { HERO, TAKEAWAY } from './data/copy';
import type { CStep } from './types';

export function App() {
  const [proofItem, setProofItem] = useState<CStep | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.fade-in').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <nav className="topnav">
        <span className="nav-brand">Energy in Perspective</span>
        <div className="nav-links">
          <a href="#big-picture">The Scale</a>
          <a href="#comparison">Per Activity</a>
          <a href="#takeaway">Takeaway</a>
          <a href="#sources">Sources</a>
        </div>
      </nav>

      <section id="hero">
        <div className="hero-inner">
          <p className="eyebrow">{HERO.eyebrow}</p>
          <h1>
            <span className="quote">{HERO.title}</span>
          </h1>
          <div className="hero-framing">
            {HERO.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <a href="#big-picture" className="scroll-cta">
            Scroll down <span className="arrow">↓</span>
          </a>
        </div>
      </section>

      <BigPicture onShowProof={setProofItem} />

      <ComparisonSection onShowProof={setProofItem} />

      <section id="takeaway">
        <div className="section-inner">
          <div className="section-header fade-in">
            <h2>So what does this tell us?</h2>
          </div>
          <div className="takeaway-body fade-in">
            {TAKEAWAY.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <Sources />

      <footer>
        <p>Every figure links to its source. See Sources above.</p>
      </footer>

      {proofItem && <ProofModal item={proofItem} onClose={() => setProofItem(null)} />}
    </>
  );
}
