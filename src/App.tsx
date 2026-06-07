import { useEffect, useState } from 'react';
import { BigPicture } from './components/BigPicture';
import { ComparisonSection } from './components/ComparisonSection';
import { ProofModal } from './components/ProofModal';
import { Sources } from './components/Sources';
import { CSTEPS } from './data/csteps';
import type { CStep } from './types';

const aiKg        = CSTEPS.find(s => s.label.startsWith('All AI queries'))!.value;
const llamaKg     = CSTEPS.find(s => s.label.startsWith('Training Llama'))!.value;
const beefKg      = CSTEPS.find(s => s.label.startsWith('Global beef and dairy'))!.value;
const fashionKg   = CSTEPS.find(s => s.label.startsWith('Global fashion'))!.value;
const foodWasteKg = CSTEPS.find(s => s.label.startsWith('Global food waste'))!.value;

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
          <div className="hero-framing">
            <p>That concern is valid. AI runs in huge power-hungry data centres, and most of the world's electricity still comes partly from gas and coal which releases greenhouse gases that contribute to climate change.</p>
            <p>But how much does AI contribute compared to other industries? Well let's take a look at what the data shows.</p>
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
            <p>AI does use energy. All AI queries globally used around {Math.round(aiKg / 1e9 / 0.4)} TWh in 2025, about {Math.round(aiKg / 1e9)} million t CO₂e. The IEA projects data centre electricity demand will roughly double by 2030, and that trajectory is worth tracking.</p>
            <p>Training is a separate cost from inference. Only Meta has published verified training figures for a current frontier model: Llama 3.1 405B required 27.5 GWh, about {Math.round(llamaKg / 1e3).toLocaleString('en-US')} t CO₂e on the average grid. GPT-4o, Claude, and Gemini have published nothing comparable. That opacity is a real problem, made worse by the fact that training is not a single event: frontier models are continuously retrained, fine-tuned, and replaced on competitive cycles. The aggregate training cost across the industry is unknown, and will remain unknown until the companies involved start disclosing it.</p>
            <p>There is also a concern that global percentage figures do not fully capture: data centres create concentrated, constant baseload demand on specific regional grids. In parts of Virginia, Ireland, and Singapore, rapid data centre expansion has contributed to delays in retiring coal and gas plants. That is a legitimate problem worth pressure, and it is separate from the question of total global emissions share.</p>
            <p>The purpose of these comparisons is not to argue that AI's footprint should go unexamined. The numbers are here because the same scrutiny applied to a ChatGPT query is rarely applied to a cheap flight, a fast fashion purchase, or beef. Beef and dairy produce around {+(beefKg / 1e12).toFixed(1)} Gt CO₂e per year. The fashion industry, around {+(fashionKg / 1e12).toFixed(1)} Gt. Food waste, around {+(foodWasteKg / 1e12).toFixed(1)} Gt. All AI inference globally runs at about {Math.round(aiKg / 1e9)} million t. These industries attract a fraction of the scrutiny that AI does, and the gap in attention is not proportional to the gap in emissions. Holding AI companies accountable is reasonable. Holding the fashion and food industries to the same standard would have a larger effect.</p>
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
