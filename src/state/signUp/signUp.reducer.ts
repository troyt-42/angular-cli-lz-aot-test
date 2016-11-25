import {Action} from '@ngrx/store';

import {SignUpActions} from './signUp.actions';
import {UserSignUp, createDefaultUserSignUp} from '../../models/userSignUp/userSignUp';
import {updateObject} from '../util';

export const signUpReducer =
  (state: UserSignUp = createDefaultUserSignUp(), action: Action): UserSignUp => {

  switch (action.type) {
    case SignUpActions.SIGN_UP_SEND:
      return updateObject(state, {
        user: null,
        error: null,
        isLoading: true,
        consentForEmailNotification: false
      });

    case SignUpActions.SIGN_UP_SEND_SUCCESS:
      return updateObject(state, {
        user: action.payload.email,
        error: null,
        isLoading: false,
        consentForEmailNotification: action.payload.consentForEmailNotification
      });

    case SignUpActions.SIGN_UP_SEND_ERROR:
      return updateObject(state, {
        user: null,
        error: action.payload,
        isLoading: false,
        consentForEmailNotification: false
      });

    default:
      return state;
  }
};
