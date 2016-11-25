import {Action} from '@ngrx/store';

import {ServicePackagesActions} from './servicePackages.actions';
import {ServicePackages, createDefaultServicePackages} from '../../models/servicePackage/servicePackages';
import {updateObject} from '../util';

export const servicePackagesReducer =
    (state: ServicePackages = createDefaultServicePackages(), action: Action): ServicePackages => {

  switch (action.type) {
    case ServicePackagesActions.SERVICE_PACKAGES_RETRIEVE:
      return updateObject(state, {
        isLoading: true,
        isReceived: false,
        error: null
      });

    case ServicePackagesActions.SERVICE_PACKAGES_RETRIEVE_SUCCESS:
      return updateObject(state, {
        isLoading: false,
        isReceived: true,
        error: null,
        servicePackages: action.payload
      });

    case ServicePackagesActions.SERVICE_PACKAGES_RETRIEVE_ERROR:
      return updateObject(state, {
        isLoading: false,
        isReceived: false,
        error: action.payload
      });

    default:
      return state;
  }
};
