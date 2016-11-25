import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../models/appState';

@Injectable()
export class PasswordPolicyActions {

  static PASSWORD_POLICY_RETRIEVE = 'PASSWORD_POLICY_RETRIEVE';
  static PASSWORD_POLICY_RETRIEVE_SUCCESS = 'PASSWORD_POLICY_RETRIEVE_SUCCESS';
  static PASSWORD_POLICY_RETRIEVE_ERROR = 'PASSWORD_POLICY_RETRIEVE_ERROR';

  constructor(private store: Store<AppState>) {

  }

  load() {
    this.store.dispatch({
      type: PasswordPolicyActions.PASSWORD_POLICY_RETRIEVE,
    });
  };

}
