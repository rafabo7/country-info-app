export const REGIONS = [
  'Africa',
  'Americas',
  'Asia',
  'Europe',
  'Oceania',
  'Antarctic',
] as const;

export type Region = typeof REGIONS[number];

export function isRegion(value: string): value is Region {
  return REGIONS.includes(value as Region);
}
