import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../models/appState';

@Injectable()
export class SignUpActions {

  static SIGN_UP_SEND = 'SIGN_UP_SEND';
  static SIGN_UP_SEND_SUCCESS = 'SIGN_UP_SEND_SUCCESS';
  static SIGN_UP_SEND_ERROR = 'SIGN_UP_SEND_ERROR';

  constructor(private store: Store<AppState>) {

  }

  signUp(email: string, password: string, consentForEmailNotification: boolean) {
    this.store.dispatch({
      type: SignUpActions.SIGN_UP_SEND,
      payload: {email, password, consentForEmailNotification}
    });
  }

}
