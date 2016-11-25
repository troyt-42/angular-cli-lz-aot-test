import {Action} from '@ngrx/store';

import {ActivationActions} from './activation.actions';
import {Activation, createDefaultActivation} from '../../../models/registration';
import {updateObject} from '../../util';

export const activationReducer =
  (state: Activation = createDefaultActivation(), action: Action): Activation => {

  switch (action.type) {
    case ActivationActions.REGISTRATION_ACTIVATE:
      return updateObject(state, {
        activated: false,
        isLoading: true,
        error: null
      });

    case ActivationActions.REGISTRATION_ACTIVATE_SUCCESS:
      return updateObject(state, {
        activated: true,
        isLoading: false,
        error: null
      });

    case ActivationActions.REGISTRATION_ACTIVATE_ERROR:
      return updateObject(state, {
        activated: false,
        isLoading: false,
        error: action.payload.error
      });

    default:
      return state;
  }
};
