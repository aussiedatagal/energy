import { useEffect, useRef, useState } from 'react';
import { CSTEPS } from '../data/csteps';
import { STEPS } from '../data/steps';
import { useScrollStep } from '../hooks/useScrollStep';
import { ComparisonChart } from './ComparisonChart';
import type { CStep } from '../types';

// Each step's data-step is the index of its bar minus one, so the chart shows that bar once
// the step is reached. Commentary steps share the number of the bar before them.
const STEP_NUMBERS = STEPS.reduce<number[]>((acc, step) => {
  const prev = acc.length ? acc[acc.length - 1] : 0;
  acc.push(step.item ? CSTEPS.findIndex((d) => d.id === step.item) - 1 : prev);
  return acc;
}, []);

interface Props {
  onShowProof: (item: CStep) => void;
}

export function ComparisonSection({ onShowProof }: Props) {
  const stickyRef = useRef<HTMLDivElement>(null);
  const [chartKey, setChartKey] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => setChartKey((k) => k + 1), 280);
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      clearTimeout(timer);
    };
  }, []);

  const { activeStep, visibleCount } = useScrollStep(stickyRef);

  // When Google search is the reference point (step 0), show ChatGPT as "×1.4 Google".
  // Once ChatGPT becomes the baseline (step 1+), flip Google to show "×0.7".
  const ratio = CSTEPS[1].value / CSTEPS[0].value;
  const googleRatio = +ratio.toFixed(1);
  const chartData = CSTEPS.slice(0, visibleCount).map((step, i) => {
    if (activeStep <= 0 && i === 1) return { ...step, mult: `×${googleRatio} Google` };
    if (activeStep >= 1 && i === 0) return { ...step, mult: `×${+(1 / ratio).toFixed(1)}` };
    return step;
  });

  return (
    <section id="comparison">
      <div className="section-inner">
        <div className="section-header fade-in">
          <h2>One ChatGPT question, compared with everything else</h2>
          <p className="section-sub">
            Scroll through to see how the scale changes, from a daily activity to training a model.
          </p>
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
            const stepNumber = STEP_NUMBERS[i];
            const cstepItem = step.item ? CSTEPS.find((d) => d.id === step.item) : undefined;
            const isActive = activeStep === stepNumber;

            return (
              <div
                key={i}
                className="comparison-step"
                data-step={stepNumber}
                {...(!step.item ? { 'data-commentary': 'true' } : {})}
              >
                <div className={`step-content${isActive ? ' active' : ''}`}>
                  <p className="step-heading">{step.heading}</p>
                  <p className="step-sub">{step.sub}</p>
                  {cstepItem && (
                    <button
                      className="step-proof-btn"
                      aria-label={`Sources for ${step.heading}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onShowProof(cstepItem);
                      }}
                    >
                      Sources
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
