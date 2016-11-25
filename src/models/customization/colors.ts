export interface Colors {
  readonly primary: string;
  readonly primaryText: string;
  readonly accent: string;
  readonly accentText: string;
  readonly contentBackground: string;
  readonly contentText: string;
  readonly error: string;
  readonly errorBackground: string;
  readonly success: string;
  readonly successBackground: string;
}

export function createDefaultColors(): Colors {
  return {
    primary: '#43bbc8',
    primaryText: '#FFFFFF',
    accent: '#1E8C98',
    accentText: '#FFFFFF',
    contentBackground: '#F2F2F2',
    contentText: '#45425A',
    error: '#B94649',
    errorBackground: '#FAE9E9',
    success: '#7BC085',
    successBackground: '#D4E3B4'
  };
}