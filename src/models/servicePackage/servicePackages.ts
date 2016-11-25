import {Loadable} from '../loadable';
import {ServicePackage} from './servicePackage';

export interface ServicePackages extends Loadable {
  readonly servicePackages: Array<ServicePackage>;
}

export function createDefaultServicePackages(): ServicePackages {
  return {
    isLoading: false,
    isReceived: false,
    servicePackages: [],
    error: null,
  };
}
