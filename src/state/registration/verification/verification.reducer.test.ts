import {Verification} from '../../../models/registration';
import {verificationReducer} from './verification.reducer';
import {VerificationActions} from './verification.actions';
import {createAction} from '../../actions/createAction';

describe('Verification Reducer', () => {
  let initState: Verification;

  it('should set isLoading to true on REGISTRATION_VERIFY', () => {
    const nextState = verificationReducer(
      initState,
      createAction(VerificationActions.REGISTRATION_VERIFY)
    );

    expect(nextState.isLoading).toBeTruthy();
    expect(nextState.error).toBeFalsy();
    expect(nextState.verified).toBeFalsy();
  });

  it('should save the user token on REGISTRATION_VERIFY_SUCCESS', () => {
    const nextState = verificationReducer(
      initState,
      createAction(VerificationActions.REGISTRATION_VERIFY_SUCCESS, {
        token: 'blah',
        userId: 'id'
      })
    );

    expect(nextState.isLoading).toBeFalsy();
    expect(nextState.error).toBeFalsy();
    expect(nextState.token).toEqual('blah');
    expect(nextState.userId).toEqual('id');
    expect(nextState.verified).toBeTruthy();
  });

  it('should flag an error on REGISTRATION_VERIFY_ERROR', () => {
    const nextState = verificationReducer(
      initState,
      createAction(VerificationActions.REGISTRATION_VERIFY_ERROR, {
        error: 'error msg'
      })
    );
    expect(nextState.isLoading).toBeFalsy();
    expect(nextState.error).toEqual('error msg');
    expect(nextState.verified).toBeFalsy();
  });

});
