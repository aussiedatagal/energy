import { useEffect, useRef, useState } from 'react';

export function computeNextCount(maxStep: number): number {
  return maxStep + 2;
}

export function useScrollStep(stickyRef: React.RefObject<HTMLElement | null>) {
  const [activeStep, setActiveStep] = useState(-1);
  const [visibleCount, setVisibleCount] = useState(2);
  const rafPendingRef = useRef(false);

  useEffect(() => {
    function update() {
      rafPendingRef.current = false;
      const chartBottom = stickyRef.current
        ? stickyRef.current.getBoundingClientRect().bottom
        : 100;
      const readingY = chartBottom + (window.innerHeight - chartBottom) * 0.2;

      let maxStep = -1;
      document.querySelectorAll<HTMLElement>('.comparison-step').forEach(el => {
        const r = el.getBoundingClientRect();
        const inZone = r.top <= readingY && r.bottom >= readingY;
        if (inZone) maxStep = Math.max(maxStep, parseInt(el.dataset.step ?? '-1', 10));
      });

      if (maxStep >= 0) {
        setActiveStep(maxStep);
        setVisibleCount(computeNextCount(maxStep));
      }
    }

    function schedule() {
      if (rafPendingRef.current) return;
      rafPendingRef.current = true;
      requestAnimationFrame(update);
    }

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    requestAnimationFrame(update);

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [stickyRef]);

  return { activeStep, visibleCount };
}
