import {Authentication} from '../../models/authentication/authentication';
import {authenticationReducer} from './authentication.reducer';
import {AuthenticationActions} from './authentication.actions';
import {createAction} from '../actions/createAction';

describe('Authentication Reducer', () => {
  let initState: Authentication;

  it('should set isLoggingIn to true on LOGIN_SEND', () => {
    const nextState = authenticationReducer(
      initState,
      createAction(AuthenticationActions.LOGIN_SEND)
    );

    expect(nextState.isLoggingIn).toBeTruthy();
    expect(nextState.error).toBeFalsy();
  });

  it('should save the user token and username on LOGIN_SEND_SUCCESS', () => {
    const nextState = authenticationReducer(
      initState,
      createAction(AuthenticationActions.LOGIN_SEND_SUCCESS, {
        result: {
          token: 'blah'
        },
        username: 'name'
      })
    );

    expect(nextState.isLoggingIn).toBeFalsy();
    expect(nextState.error).toBeFalsy();
    expect(nextState.userToken).toEqual('blah');
    expect(nextState.username).toEqual('name');
  });

  it('should flag an error on LOGIN_SEND_ERROR', () => {
    const nextState = authenticationReducer(
      initState,
      createAction(AuthenticationActions.LOGIN_SEND_ERROR, 'error msg')
    );

    expect(nextState.userToken).toBeFalsy();
    expect(nextState.isLoggingIn).toBeFalsy();
    expect(nextState.error).toEqual('error msg');
  });

  it('should set isLoggingIn to true on ANONYMOUS_LOGIN_SEND', () => {
    const nextState = authenticationReducer(
      initState,
      createAction(AuthenticationActions.ANONYMOUS_LOGIN_SEND)
    );

    expect(nextState.error).toBeFalsy();
  });

  it('should save the anonymous token and username on ANONYMOUS_LOGIN_SEND_SUCCESS', () => {
    const nextState = authenticationReducer(
      initState,
      createAction(AuthenticationActions.ANONYMOUS_LOGIN_SEND_SUCCESS, {
        result: {
          token: 'blah'
        }
      })
    );

    expect(nextState.error).toBeFalsy();
    expect(nextState.anonymousToken).toEqual('blah');
  });

  it('should flag an error on ANONYMOUS_LOGIN_SEND_ERROR', () => {
    const nextState = authenticationReducer(
      initState,
      createAction(AuthenticationActions.ANONYMOUS_LOGIN_SEND_ERROR, 'error msg')
    );

    expect(nextState.anonymousToken).toBeFalsy();
    expect(nextState.error).toEqual('error msg');
  });

  it('should save the contactSysId and username on GET_USER_SUCCESS', () => {
    const nextState = authenticationReducer(
      initState,
      createAction(AuthenticationActions.GET_USER_SUCCESS, {
        result: {
          contactSysId: 'sys id',
          username: 'test'
        }
      })
    );

    expect(nextState.error).toBeFalsy();
    expect(nextState.user.contactSysId).toEqual('sys id');
    expect(nextState.user.username).toEqual('test');
  });

  it('should flag an error on GET_USER_ERROR', () => {
    const nextState = authenticationReducer(
      initState,
      createAction(AuthenticationActions.GET_USER_ERROR, 'error msg')
    );

    expect(nextState.user.contactSysId).toBeFalsy();
    expect(nextState.error).toEqual('error msg');
  });

  it('should set username on LOGIN_SET_USERNAME', () => {
    const nextState = authenticationReducer(
      initState,
      createAction(AuthenticationActions.LOGIN_SET_USERNAME, {
        username: 'Demar Derozan',
        remember: true
      })
    );

    expect(nextState.username).toEqual('Demar Derozan');
    expect(nextState.rememberUsername).toEqual(true);
    expect(nextState.error).toBeFalsy();
  });

  it('should LOGOUT', () => {
    const nextState = authenticationReducer(
      initState,
      createAction(AuthenticationActions.LOGOUT)
    );

    expect(nextState.isLoggingIn).toEqual(false);
    expect(nextState.userToken).toEqual(null);
    expect(nextState.error).toEqual(null);
    expect(nextState.username).toEqual(null);
    expect(nextState.rememberUsername).toEqual(false);
  });

});
