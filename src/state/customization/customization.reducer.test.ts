import {Customization} from '../../models/customization/customization';
import {CustomizationActions} from './customization.actions';
import {customizationReducer} from './customization.reducer';
import {createDefaultColors} from '../../models/customization/colors';
import {createAction} from '../actions/createAction';

describe('Customization Reducer', () => {
  let initState: Customization;

  it('should set loading to true on CUSTOMIZATIONS_RETRIEVE', () => {
    const nextState = customizationReducer(
      initState,
      createAction(CustomizationActions.CUSTOMIZATIONS_RETRIEVE)
    );

    expect(nextState.isLoading).toBeTruthy();
    expect(nextState.hasError).toBeFalsy();
    expect(nextState.colors).toEqual(createDefaultColors());
  });

  it('should save the user token on CUSTOMIZATIONS_RETRIEVE_SUCCESS', () => {
    const nextState = customizationReducer(
      initState,
      createAction(CustomizationActions.CUSTOMIZATIONS_RETRIEVE_SUCCESS, {
        colors: {
          primaryText: 'red'
        },
        irisServer: {
          url: 'univeris.com'
        }
      })
    );

    expect(nextState.isLoading).toBeFalsy();
    expect(nextState.hasError).toBeFalsy();
    expect(nextState.colors.primaryText).toEqual('red');
    expect(nextState.irisServer.url).toEqual('univeris.com');
  });

  it('should flag an error on CUSTOMIZATIONS_RETRIEVE_ERROR', () => {
    const nextState = customizationReducer(
      initState,
      createAction(CustomizationActions.CUSTOMIZATIONS_RETRIEVE_ERROR)
    );

    expect(nextState.isLoading).toBeFalsy();
    expect(nextState.hasError).toBeTruthy();
  });
});
