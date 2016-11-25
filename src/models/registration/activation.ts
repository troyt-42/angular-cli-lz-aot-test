import {Loadable} from '../loadable';

export interface Activation extends Loadable {
  readonly activated: boolean;
}

export function createDefaultActivation(): Activation {
  return {
    isLoading: false,
    isReceived: false,
    activated: false,
    error: null
  };
}
