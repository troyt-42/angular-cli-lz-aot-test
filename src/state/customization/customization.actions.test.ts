import {CustomizationActions} from './customization.actions';
import {MockStore} from '../../test/mockStore';

describe('customization action creators', () => {
  let actions: CustomizationActions;
  let store: MockStore;

  beforeEach(() => {
    store = new MockStore();
    actions = new CustomizationActions(store);
  });

  it('fetch should dispatch CUSTOMIZATIONS_RETRIEVE action', () => {
    const expectedAction = {
      type: CustomizationActions.CUSTOMIZATIONS_RETRIEVE
    };

    spyOn(store, 'dispatch');
    actions.initialize();

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
  });
});
