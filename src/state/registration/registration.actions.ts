import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../models/appState';
import {SignUpInfo} from '../../models';
import {createAction} from '../actions/createAction';

@Injectable()
export class RegistrationActions {

  static REGISTRATION_SET_BASIC_INFO = 'REGISTRATION_SET_BASIC_INFO';

  constructor(private store: Store<AppState>) {}

  setBasicInfo(info: SignUpInfo) {
    this.store.dispatch(createAction(RegistrationActions.REGISTRATION_SET_BASIC_INFO, {
      info
    }));
  };
}
