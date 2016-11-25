import {Loadable} from '../loadable';

export interface PasswordPolicy extends Loadable {
  readonly lowerCase: number;
  readonly upperCase: number;
  readonly numberOfDigits: number;
  readonly length: number;
  readonly specialCharacters: number;
}

export function createDefaultPasswordPolicy(): PasswordPolicy {
  return {
    isLoading: false,
    isReceived: false,
    error: null,
    lowerCase: 1,
    upperCase: 1,
    numberOfDigits: 1,
    length: 6,
    specialCharacters: 1
  };
}