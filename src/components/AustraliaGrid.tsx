import { GRID_QUOTES, GRID_TOTAL, GRID_USES } from '../data/aemo';
import type { CStep } from '../types';

interface Props {
  onShowProof: (item: CStep) => void;
}

const proofItem: CStep = {
  id: 'aemoGrid',
  label: 'Electricity on Australia’s east coast grid',
  value: 0,
  color: '#56d364',
  mult: '',
  proof: {
    primary: 'AEMO’s central (Step Change) forecast for the National Electricity Market',
    quotes: GRID_QUOTES,
    calc: 'Tomago: 950 MW × 8,760 hours = 8.3 TWh a year',
    result: `Grid total ${GRID_TOTAL.now} TWh in 2025–26, ${GRID_TOTAL.fy36} TWh in 2035–36`,
    note: 'The east coast grid covers Queensland, New South Wales, the ACT, Victoria, South Australia and Tasmania. The electric vehicle fleet projection covers battery and plug-in hybrid vehicles across the east coast and WA grids.',
  },
};

export function AustraliaGrid({ onShowProof }: Props) {
  const max = Math.max(...GRID_USES.map((d) => d.twh));
  return (
    <section id="australia">
      <div className="section-inner">
        <div className="section-header fade-in">
          <h2>Australia’s grid</h2>
          <p className="section-sub">
            AEMO forecasts the east coast grid will supply {GRID_TOTAL.fy36} TWh a year by 2035–36,
            up from {GRID_TOTAL.now} TWh now. Data centres are the fastest-growing user, from about
            5 TWh to 34 TWh. Here they are next to other big changes on the grid, in TWh a year.
          </p>
        </div>
        <ul className="grid-bars fade-in">
          {GRID_USES.map((d) => (
            <li key={d.name} className={d.highlight ? 'grid-bar highlight' : 'grid-bar'}>
              <div className="grid-bar-label">
                <span>{d.name}</span>
                <strong>{d.twh} TWh</strong>
              </div>
              <div className="grid-bar-track">
                <div className="grid-bar-fill" style={{ width: `${(d.twh / max) * 100}%` }} />
              </div>
              <p className="grid-bar-detail">{d.detail}</p>
            </li>
          ))}
        </ul>
        <p className="section-sub fade-in">
          AEMO projects 16 to 30 million electric vehicles in Australia by 2050, 66% to 98% of all
          vehicles. At the rate in its estimate (700,000 vehicles for 1.2 TWh), 16 million would use
          about {Math.round((16e6 / 700000) * 1.2)} TWh a year.
        </p>
        <button className="text-link" onClick={() => onShowProof(proofItem)}>
          Sources and quotes
        </button>
      </div>
    </section>
  );
}
