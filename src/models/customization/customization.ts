import {Colors, createDefaultColors} from './colors';
import {IrisServer, createDefaultIrisServer} from './irisServer';

export interface Customization {
  readonly colors: Colors;
  readonly irisServer: IrisServer;
  readonly hasError: boolean;
  readonly isLoading: boolean;
}

export function createDefaultCustomization(): Customization {
  return {
    colors: createDefaultColors(),
    irisServer: createDefaultIrisServer(),
    hasError: false,
    isLoading: false,
  };
}