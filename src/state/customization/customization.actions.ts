import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../models/appState';

@Injectable()
export class CustomizationActions {

  static CUSTOMIZATIONS_RETRIEVE = 'CUSTOMIZATIONS_RETRIEVE';
  static CUSTOMIZATIONS_RETRIEVE_SUCCESS = 'CUSTOMIZATIONS_RETRIEVE_SUCCESS';
  static CUSTOMIZATIONS_RETRIEVE_ERROR = 'CUSTOMIZATIONS_RETRIEVE_ERROR';

  constructor(private store: Store<AppState>) {

  }

  initialize() {
    this.store.dispatch({
      type: CustomizationActions.CUSTOMIZATIONS_RETRIEVE,
    });
  };
}
