import { useEffect, useRef, useState } from 'react';
import { CSTEPS } from '../data/csteps';
import { STEPS } from '../data/steps';
import { useScrollStep } from '../hooks/useScrollStep';
import { ComparisonChart } from './ComparisonChart';
import type { CStep } from '../types';

interface Props {
  onShowProof: (item: CStep) => void;
}

export function ComparisonSection({ onShowProof }: Props) {
  const stickyRef   = useRef<HTMLDivElement>(null);
  const [chartKey, setChartKey] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => setChartKey(k => k + 1), 280);
    };
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('resize', onResize); clearTimeout(timer); };
  }, []);

  const { activeStep, visibleCount } = useScrollStep(stickyRef);
  const chartData = CSTEPS.slice(0, visibleCount);

  return (
    <section id="comparison">
      <div className="section-inner">
        <div className="section-header fade-in">
          <h2>One ChatGPT query, compared to everything else</h2>
          <p className="section-sub">Scroll through to see how the scale changes, from a daily activity to training a model.</p>
        </div>
      </div>
      <div className="comparison-outer">
        <div className="comparison-sticky" ref={stickyRef}>
          <div className="comp-chart-inner">
            <ComparisonChart key={chartKey} data={chartData} stickyRef={stickyRef} />
          </div>
        </div>
        <div className="comparison-steps-wrap">
          {STEPS.map((step, i) => {
            const cstepItem = !step.commentary ? CSTEPS[step.step + 1] : undefined;
            const isActive = activeStep === step.step;

            return (
              <div
                key={i}
                className="comparison-step"
                data-step={step.step}
                {...(step.commentary ? { 'data-commentary': 'true' } : {})}
              >
                <div className={`step-content${isActive ? ' active' : ''}`}>
                  <p className="step-heading">{step.heading}</p>
                  <p className="step-sub">{step.sub}</p>
                  {cstepItem?.proof && (
                    <button
                      className="step-proof-btn"
                      aria-label="Show source"
                      onClick={e => { e.stopPropagation(); onShowProof(cstepItem); }}
                    >
                      ?
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
