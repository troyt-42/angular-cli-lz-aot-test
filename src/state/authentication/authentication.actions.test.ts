import {MockStore} from '../../test/mockStore';
import {AuthenticationActions} from './authentication.actions';

describe('authentication action creators', () => {
  let actions: AuthenticationActions;
  let store: MockStore;

  beforeEach(() => {
    store = new MockStore();
    actions = new AuthenticationActions(store);
  });

  it('login should dispatch LOGIN_SEND action', () => {
    const fakeCredentials = {
      userType: 'INVESTOR',
      username: 'user',
      password: 'pass',
    };
    const expectedAction = {
      type: AuthenticationActions.LOGIN_SEND,
      payload: {
        credentials: fakeCredentials,
        successRoute: 'route'
      }
    };

    spyOn(store, 'dispatch');
    actions.login(fakeCredentials, 'route');

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it('login should dispatch ANONYMOUS_LOGIN_SEND action', () => {
    const fakeCredentials = {
      userType: 'ADVISOR',
      username: 'user',
      password: 'pass',
    };
    const expectedAction = {
      type: AuthenticationActions.ANONYMOUS_LOGIN_SEND,
      payload: {
        credentials: fakeCredentials
      }
    };

    spyOn(store, 'dispatch');
    actions.anonymousLogin(fakeCredentials);

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it('set username should dispatch LOGIN_SET_USERNAME action', () => {
    const expectedAction = {
      type: AuthenticationActions.LOGIN_SET_USERNAME,
      payload: {
        username: 'user',
        remember: true
      }
    };

    spyOn(store, 'dispatch');
    actions.setUsername('user', true);

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
  });
});
