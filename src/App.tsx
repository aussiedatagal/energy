import { useEffect, useState } from 'react';
import { BigPicture } from './components/BigPicture';
import { ComparisonSection } from './components/ComparisonSection';
import { ProofModal } from './components/ProofModal';
import { Sources } from './components/Sources';
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
          <p className="eyebrow">Global energy use in perspective</p>
          <h1>
            <span className="quote">Is AI really the biggest problem?</span>
          </h1>
          <div className="hero-framing">
            <p>There's been a lot of talk lately about the environmental impact of AI.</p>
            <p>Those concerns are valid, but are they overblown?</p>
            <p>Let's find out how large the energy footprint is, compared to other industries.</p>
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
            <p>
              AI's energy use is real and it is growing. Data centres are projected to roughly
              double their electricity consumption by 2030, and most of the world's grid is still
              partly fossil-fuelled.
            </p>
            <p>
              All the world's data centres, of which AI is one part, emitted around 180 million t
              CO₂ in 2024 (IEA). Beef and dairy cattle emit about 3.8 billion t CO₂e a year (FAO)
              and food waste about 9.3 billion t (2017), roughly 20 and 50 times that. The data
              centre figure is the one expected to grow quickly: the IEA projects their electricity
              use will more than double by 2030.
            </p>
          </div>
        </div>
      </section>

      <Sources />

      <footer>
        <p>All figures from primary sources. See Sources above.</p>
      </footer>

      {proofItem && <ProofModal item={proofItem} onClose={() => setProofItem(null)} />}
    </>
  );
}
