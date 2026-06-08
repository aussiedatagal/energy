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
          <p className="eyebrow">Global energy use, in context</p>
          <h1>
            <span className="quote">
              "AI is
              <br />
              destroying
              <br />
              the planet."
            </span>
          </h1>
          <div className="hero-framing">
            <p>
              That concern is valid. AI runs in data centres, and most of the world's electricity
              still comes partly from gas and coal, which releases greenhouse gases that contribute
              to climate change.
            </p>
            <p>But how large is that footprint, compared to other industries?</p>
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
              But the comparisons above show that other industries require far more of our
              attention. Beef and dairy farming, food waste, and the fashion industry are hurting
              the environment orders of magnitude more than the AI distraction.
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
