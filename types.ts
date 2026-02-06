export interface ChipsetSpec {
  name: string;
  cpu: string;
  gpu: string;
  process: string;
  aiEngine: string;
  antutuScore: string;
}

export interface BrandData {
  id: string;
  name: string;
  color: string;
  accentColor: string;
  description: string;
  philosophy: string;
  flagshipChip: ChipsetSpec;
  history: string;
}

export enum TabView {
  OVERVIEW = 'OVERVIEW',
  SPECS = 'SPECS',
  HISTORY = 'HISTORY'
}