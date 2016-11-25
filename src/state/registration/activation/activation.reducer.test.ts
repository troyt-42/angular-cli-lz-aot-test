import {Activation} from '../../../models/registration';
import {activationReducer} from './activation.reducer';
import {ActivationActions} from './activation.actions';
import {createAction} from '../../actions/createAction';

describe('Activation Reducer', () => {
  let initState: Activation;

  it('should set isLoading to true on REGISTRATION_ACTIVATE', () => {
    const nextState = activationReducer(
      initState,
      createAction(ActivationActions.REGISTRATION_ACTIVATE)
    );

    expect(nextState.isLoading).toBeTruthy();
    expect(nextState.error).toBeFalsy();
    expect(nextState.activated).toBeFalsy();
  });

  it('should set activated to true on REGISTRATION_ACTIVATE_SUCCESS', () => {
    const nextState = activationReducer(
      initState,
      createAction(ActivationActions.REGISTRATION_ACTIVATE_SUCCESS)
    );

    expect(nextState.isLoading).toBeFalsy();
    expect(nextState.error).toBeFalsy();
    expect(nextState.activated).toBeTruthy();
  });

  it('should flag an error on REGISTRATION_ACTIVATE_ERROR', () => {
    const nextState = activationReducer(
      initState,
      createAction(ActivationActions.REGISTRATION_ACTIVATE_ERROR, {
        error: 'error msg'
      })
    );
    expect(nextState.isLoading).toBeFalsy();
    expect(nextState.error).toEqual('error msg');
    expect(nextState.activated).toBeFalsy();
  });

});
