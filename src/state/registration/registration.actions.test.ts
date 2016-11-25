import {MockStore} from '../../test/mockStore';
import {RegistrationActions} from './registration.actions';

describe('registration action creators', () => {
  let actions: RegistrationActions;
  let store: MockStore;

  beforeEach(() => {
    store = new MockStore();
    actions = new RegistrationActions(store);
  });

  it('verify should dispatch REGISTRATION_SET_BASIC_INFO action', () => {
    const fakeInfo = {
      email: 'test@testing.com',
      password: 'pass',
      username: 'user',
      consentForEmailNotification: true
    };

    const expectedAction = {
      type: RegistrationActions.REGISTRATION_SET_BASIC_INFO,
      payload: {
        info: fakeInfo
      }
    };

    spyOn(store, 'dispatch');
    actions.setBasicInfo(fakeInfo);

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
  });

});
