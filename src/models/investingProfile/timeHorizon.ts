export interface TimeHorizon {
  readonly code: string;
  readonly description: string;
}

export function createDefaultTimeHorizon(): TimeHorizon {
  return {
    code: null,
    description: null
  };
}