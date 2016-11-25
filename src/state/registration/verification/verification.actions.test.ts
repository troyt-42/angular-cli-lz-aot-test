import {MockStore} from '../../../test/mockStore';
import {VerificationActions} from './verification.actions';

describe('verification action creators', () => {
  let actions: VerificationActions;
  let store: MockStore;

  beforeEach(() => {
    store = new MockStore();
    actions = new VerificationActions(store);
  });

  it('verify should dispatch REGISTRATION_VERIFY action', () => {
    const expectedAction = {
      type: VerificationActions.REGISTRATION_VERIFY,
      payload: {
        userId: 'user id',
        token: 'token'
      }
    };

    spyOn(store, 'dispatch');
    actions.verify('user id', 'token');

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
  });
});
