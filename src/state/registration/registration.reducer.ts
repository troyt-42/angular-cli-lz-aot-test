import {Action} from '@ngrx/store';

import {RegistrationActions} from './registration.actions';
import {Registration} from '../../models/registration';
import {updateObject} from '../util';
import {createDefaultRegistration} from '../../models/registration/registration';

import {activationReducer} from './activation/activation.reducer';
import {securityQuestionsReducer} from './securityQuestions/securityQuestions.reducer';
import {verificationReducer} from './verification/verification.reducer';

export const registrationReducer =
  (state: Registration = createDefaultRegistration(), action: Action): Registration => {

  state = updateObject(state, {
    activation: activationReducer(state.activation, action)
  });

  state = updateObject(state, {
    securityQuestions: securityQuestionsReducer(state.securityQuestions, action)
  });

  state = updateObject(state, {
    verification: verificationReducer(state.verification, action)
  });

  switch (action.type) {
    case RegistrationActions.REGISTRATION_SET_BASIC_INFO:
      return updateObject(state, {
        basicInfo: action.payload.info
      });

    default:
      return state;
  }
};
