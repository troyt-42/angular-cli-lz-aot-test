import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../models/appState';
import {createAction} from '../../actions/createAction';

@Injectable()
export class ActivationActions {

  static REGISTRATION_ACTIVATE = 'REGISTRATION_ACTIVATE';
  static REGISTRATION_ACTIVATE_SUCCESS = 'REGISTRATION_ACTIVATE_SUCCESS';
  static REGISTRATION_ACTIVATE_ERROR = 'REGISTRATION_ACTIVATE_ERROR';

  constructor(private store: Store<AppState>) {}

  activate(successRoute: string = null) {
    this.store.dispatch(createAction(ActivationActions.REGISTRATION_ACTIVATE, {
      successRoute
    }));
  };

}
