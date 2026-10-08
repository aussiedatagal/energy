export interface Source {
  title: string;
  url: string;
}

export interface Quote {
  source: Source;
  text: string;
  page?: number;
}

export interface Proof {
  primary: string;
  quotes: Quote[];
  calc?: string;
  result: string;
  note?: string;
}

export interface CStep {
  id: string;
  label: string;
  value: number;
  color: string;
  mult: string;
  co2Only?: boolean;
  proof: Proof;
}

export interface TreemapLeaf {
  name: string;
  value: number;
  co2Only?: boolean;
  proof: Proof;
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

export interface StepItem {
  item?: string;
  heading: string;
  sub: string;
}
