import {Loadable} from '../loadable';

export interface Verification extends Loadable {
  readonly verified: boolean;
  readonly userId: string;
  readonly token: string;
}

export function createDefaultVerification(): Verification {
  return {
    isLoading: false,
    isReceived: false,
    verified: false,
    userId: null,
    token: null,
    error: new Error()
  };
}
