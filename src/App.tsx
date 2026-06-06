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
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
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
          <h1><span className="quote">"AI is<br />destroying<br />the planet."</span></h1>
          <p className="hero-sub">Here's what the data actually shows.</p>
          <div className="hero-stat-row">
            <div className="hero-stat">
              <div className="hero-stat-number">6 <span className="unit">Mt CO₂e</span></div>
              <div className="hero-stat-label">All AI queries globally, 2025</div>
            </div>
            <div className="hero-stat-divider">vs</div>
            <div className="hero-stat">
              <div className="hero-stat-number">40 <span className="unit">Mt CO₂e</span></div>
              <div className="hero-stat-label">Bitcoin mining, 2025</div>
            </div>
            <div className="hero-stat-divider">vs</div>
            <div className="hero-stat">
              <div className="hero-stat-number">7,100 <span className="unit">Mt CO₂e</span></div>
              <div className="hero-stat-label">Beef &amp; livestock, annually</div>
            </div>
          </div>
          <a href="#big-picture" className="scroll-cta">Scroll down <span className="arrow">↓</span></a>
        </div>
      </section>

      <BigPicture />

      <ComparisonSection onShowProof={setProofItem} />

      <section id="takeaway">
        <div className="section-inner">
          <div className="section-header fade-in">
            <h2>So what does this tell us?</h2>
          </div>
          <div className="takeaway-body fade-in">
            <p>AI does use energy. All AI queries globally used around 15 TWh in 2025, about 6 Mt CO₂e. The IEA projects data centre electricity demand will roughly double by 2030.</p>
            <p>Training is a separate cost from queries. Only Meta has published verified training figures for a current frontier model: Llama 3.1 405B required 27.5 GWh, about 11,390 t CO₂e on the average grid. GPT-4o, Claude, and Gemini have published nothing comparable. Training costs are one-time per model and spread across every subsequent query.</p>
            <p>The fashion industry produces around 1,200 Mt CO₂e per year, about 200× everything AI produces including training. Food waste, 3,300 Mt. Livestock, 7,100 Mt. Together those three are emitting at roughly 1,800× the scale of AI.</p>
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
