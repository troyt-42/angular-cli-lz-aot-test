import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../models/appState';
import {createAction} from '../../actions/createAction';

@Injectable()
export class VerificationActions {

  static REGISTRATION_VERIFY = 'REGISTRATION_VERIFY';
  static REGISTRATION_VERIFY_SUCCESS = 'REGISTRATION_VERIFY_SUCCESS';
  static REGISTRATION_VERIFY_ERROR = 'REGISTRATION_VERIFY_ERROR';

  constructor(private store: Store<AppState>) {}

  verify(userId: string, token: string) {
    this.store.dispatch(createAction(VerificationActions.REGISTRATION_VERIFY, {
      userId,
      token
    }));
  };

}
