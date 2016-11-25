import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {IrisCredentials} from '../../models';
import {AppState} from '../../models/appState';
import {createAction} from '../actions/createAction';

@Injectable()
export class AuthenticationActions {

  static LOGIN_SEND = 'LOGIN_SEND';
  static LOGIN_SEND_SUCCESS = 'LOGIN_SEND_SUCCESS';
  static LOGIN_SEND_ERROR = 'LOGIN_SEND_ERROR';

  static ANONYMOUS_LOGIN_SEND = 'ANONYMOUS_LOGIN_SEND';
  static ANONYMOUS_LOGIN_SEND_SUCCESS = 'ANONYMOUS_LOGIN_SEND_SUCCESS';
  static ANONYMOUS_LOGIN_SEND_ERROR = 'ANONYMOUS_LOGIN_SEND_ERROR';

  static GET_USER = 'GET_USER';
  static GET_USER_SUCCESS = 'GET_USER_SUCCESS';
  static GET_USER_ERROR = 'GET_USER_ERROR';

  static LOGIN_SET_USERNAME = 'LOGIN_SET_USERNAME';

  static LOGOUT = 'LOGOUT';

  constructor(private store: Store<AppState>) {
  }

  login(credentials: IrisCredentials, successRoute: string = null) {
    this.store.dispatch(createAction(AuthenticationActions.LOGIN_SEND, {
      credentials,
      successRoute
    }));
  };

  anonymousLogin(credentials: IrisCredentials) {
    this.store.dispatch(createAction(AuthenticationActions.ANONYMOUS_LOGIN_SEND, {
      credentials
    }));
  }

  setUsername(username: string, remember: boolean = false) {
    this.store.dispatch(createAction(AuthenticationActions.LOGIN_SET_USERNAME, {
      username, remember
    }));
  };

  logout() {
    this.store.dispatch(createAction(AuthenticationActions.LOGOUT));
  }

}
