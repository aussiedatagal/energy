export interface Proof {
  primary: string;
  quote?: string;
  quote2?: string;
  source: string;
  sourceUrl?: string;
  source2?: string;
  sourceUrl2?: string;
  calc?: string;
  result: string;
  note?: string;
}

export interface CStep {
  label: string;
  value: number;
  mult: string;
  color: string;
  proof?: Proof;
}

export interface TreemapLeaf {
  name: string;
  value: number;
  detail: string;
  quote?: string;
  quote2?: string;
  source: string;
  sourceUrl?: string;
  source2?: string;
  sourceUrl2?: string;
  note?: string;
  highlight?: boolean;
}

export interface TreemapCategory {
  name: string;
  color: string;
  children: TreemapLeaf[];
}

export interface TreemapRoot {
  name: string;
  children: TreemapCategory[];
}

export interface Source {
  title: string;
  url: string;
  quote: string;
}

export interface StepItem {
  step: number;
  heading: string;
  sub: string;
  commentary?: true;
}
