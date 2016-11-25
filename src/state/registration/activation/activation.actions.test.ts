import {MockStore} from '../../../test/mockStore';
import {ActivationActions} from './activation.actions';

describe('activation action creators', () => {
  let actions: ActivationActions;
  let store: MockStore;

  beforeEach(() => {
    store = new MockStore();
    actions = new ActivationActions(store);
  });

  it('activate should dispatch REGISTRATION_ACTIVATE action', () => {
    const expectedAction = {
      type: ActivationActions.REGISTRATION_ACTIVATE,
      payload: {
        successRoute: 'route'
      }
    };

    spyOn(store, 'dispatch');
    actions.activate('route');

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
  });
});
