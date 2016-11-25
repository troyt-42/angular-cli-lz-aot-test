import {Action} from '@ngrx/store';

import {PasswordPolicyActions} from './passwordPolicy.actions';
import {createDefaultPasswordPolicy, PasswordPolicy} from '../../models/passwordPolicy/passwordPolicy';
import {updateObject} from '../util';

export const passwordPolicyReducer =
  (state: PasswordPolicy = createDefaultPasswordPolicy(), action: Action): PasswordPolicy => {

  switch (action.type) {
    case PasswordPolicyActions.PASSWORD_POLICY_RETRIEVE:
      return updateObject(state, {
        isLoading: true,
        isReceived: false
      });

    case PasswordPolicyActions.PASSWORD_POLICY_RETRIEVE_SUCCESS:
      return updateObject(state, {
        isLoading: false,
        isReceived: true,
        error: null,
        lowerCase: action.payload.lowerCase,
        upperCase: action.payload.upperCase,
        numberOfDigits: action.payload.numberOfDigits,
        length: action.payload.length,
        specialCharacters: action.payload.specialCharacters
      });

    case PasswordPolicyActions.PASSWORD_POLICY_RETRIEVE_ERROR:
      return updateObject(state, {
        isLoading: false,
        isReceived: false,
        error: action.payload.error,
      });

    default:
      return state;
  }
};
