import { GRID_FY36, GRID_QUOTES } from '../data/aemo';
import type { CStep } from '../types';

interface Props {
  onShowProof: (item: CStep) => void;
}

const proofItem: CStep = {
  id: 'aemoGrid',
  label: 'Biggest users of grid electricity, FY36 (AEMO forecast)',
  value: 0,
  color: '#56d364',
  mult: '',
  proof: {
    primary: 'Share of electricity from the National Electricity Market grid in 2035–36',
    quotes: GRID_QUOTES,
    result: 'Data centres 13%, up from about 3% in 2025–26',
    note: 'AEMO’s central forecast for the eastern and south-eastern states. AEMO lists these as the biggest consumers; they don’t add up to 100%.',
  },
};

export function AustraliaGrid({ onShowProof }: Props) {
  const max = Math.max(...GRID_FY36.map((d) => d.percent));
  return (
    <section id="australia">
      <div className="section-inner">
        <div className="section-header fade-in">
          <h2>Australia’s grid in 2036</h2>
          <p className="section-sub">
            AEMO forecasts data centres will grow from about 3% of the electricity on the east coast
            grid today to 13% by 2036. They still aren’t expected to be the biggest user. These are
            AEMO’s biggest users in 2035–36.
          </p>
        </div>
        <ul className="grid-bars fade-in">
          {GRID_FY36.map((d) => (
            <li key={d.name} className={d.highlight ? 'grid-bar highlight' : 'grid-bar'}>
              <div className="grid-bar-label">
                <span>{d.name}</span>
                <strong>{d.percent}%</strong>
              </div>
              <div className="grid-bar-track">
                <div className="grid-bar-fill" style={{ width: `${(d.percent / max) * 100}%` }} />
              </div>
              <p className="grid-bar-detail">{d.detail}</p>
            </li>
          ))}
        </ul>
        <button className="text-link" onClick={() => onShowProof(proofItem)}>
          Source and quotes
        </button>
      </div>
    </section>
  );
}
