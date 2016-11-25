import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../models/appState';

@Injectable()
export class ServicePackagesActions {

  static SERVICE_PACKAGES_RETRIEVE = 'SERVICE_PACKAGES_RETRIEVE';
  static SERVICE_PACKAGES_RETRIEVE_SUCCESS = 'SERVICE_PACKAGES_RETRIEVE_SUCCESS';
  static SERVICE_PACKAGES_RETRIEVE_ERROR = 'SERVICE_PACKAGES_RETRIEVE_ERROR';

  constructor(private store: Store<AppState>) {

  }

  load() {
    this.store.dispatch({
      type: ServicePackagesActions.SERVICE_PACKAGES_RETRIEVE
    });
  }

}
