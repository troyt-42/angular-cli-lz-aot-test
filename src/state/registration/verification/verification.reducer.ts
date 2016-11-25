import {Action} from '@ngrx/store';

import {VerificationActions} from './verification.actions';
import {Verification, createDefaultVerification} from '../../../models/registration';
import {updateObject} from '../../util';

export const verificationReducer =
  (state: Verification = createDefaultVerification(), action: Action): Verification => {

  switch (action.type) {
    case VerificationActions.REGISTRATION_VERIFY:
      return updateObject(state, {
        verified: false,
        isLoading: true,
        error: null
      });

    case VerificationActions.REGISTRATION_VERIFY_SUCCESS:
      return updateObject(state, {
        verified: true,
        userId: action.payload.userId,
        token: action.payload.token,
        isLoading: false,
        error: null
      });

    case VerificationActions.REGISTRATION_VERIFY_ERROR:
      return updateObject(state, {
        verified: false,
        token: null,
        isLoading: false,
        error: action.payload.error
      });

    default:
      return state;
  }
};
