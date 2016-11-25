import {Action} from '@ngrx/store';

import {AuthenticationActions} from './authentication.actions';
import {Authentication, createDefaultUser} from '../../models';
import {updateObject} from '../util';
import {createDefaultAuthentication} from '../../models/authentication';

let getTokenFromPayload = (action: Action) => {
  // Due to some backend issues token could be named token or accessToken
  return action.payload.result.token || action.payload.result.accessToken;
};

export const authenticationReducer =
  (state: Authentication = createDefaultAuthentication(), action: Action): Authentication => {

  switch (action.type) {
    case AuthenticationActions.LOGIN_SEND:
      return updateObject(state, {
        isLoggingIn: true,
        error: null
      });

    case AuthenticationActions.LOGIN_SEND_SUCCESS:
      return updateObject(state, {
        username: action.payload.username,
        userToken: getTokenFromPayload(action),
        isLoggingIn: false,
        error: null
      });

    case AuthenticationActions.LOGIN_SEND_ERROR:
      return updateObject(state, {
        userToken: null,
        isLoggingIn: false,
        error: action.payload
      });

    case AuthenticationActions.ANONYMOUS_LOGIN_SEND:
      return updateObject(state, {
        error: null
      });

    case AuthenticationActions.ANONYMOUS_LOGIN_SEND_SUCCESS:
      return updateObject(state, {
        anonymousToken: getTokenFromPayload(action),
        error: null
      });

    case AuthenticationActions.ANONYMOUS_LOGIN_SEND_ERROR:
      return updateObject(state, {
        anonymousToken: null,
        error: action.payload
      });

    case AuthenticationActions.GET_USER_SUCCESS:
      return updateObject(state, {
        user: action.payload.result,
        error: null
      });

    case AuthenticationActions.GET_USER_ERROR:
      return updateObject(state, {
        user: createDefaultUser(),
        error: action.payload
      });

    case AuthenticationActions.LOGIN_SET_USERNAME:
      // TODO: We need to figure out why this is getting called with null value
      return action.payload.username ? updateObject(state, {
        username: action.payload.username,
        rememberUsername: action.payload.remember,
        error: null
      }) : state;

    case AuthenticationActions.LOGOUT:
      return updateObject(state, {
        userToken: null,
        username: null
      });

    default:
      return state;
  }
};
