import {Action} from '@ngrx/store';

import {CustomizationActions} from './customization.actions';
import {Customization} from '../../models/customization';
import {updateObject} from '../util';
import {createDefaultCustomization} from '../../models/customization/customization';
import {createDefaultColors} from '../../models/customization/colors';
import {createDefaultIrisServer} from '../../models/customization/irisServer';

export const customizationReducer =
  (state: Customization = createDefaultCustomization(), action: Action): Customization => {

  switch (action.type) {
    case CustomizationActions.CUSTOMIZATIONS_RETRIEVE:
      return updateObject(state, {
        colors: createDefaultColors(),
        irisServer: createDefaultIrisServer(),
        hasError: false,
        isLoading: true
      });

    case CustomizationActions.CUSTOMIZATIONS_RETRIEVE_SUCCESS:
      return updateObject(state, {
        colors: updateObject(state.colors, action.payload.colors),
        irisServer: updateObject(state.irisServer, action.payload.irisServer),
        hasError: false,
        isLoading: false
      });

    case CustomizationActions.CUSTOMIZATIONS_RETRIEVE_ERROR:
      return updateObject(state, {
        hasError: true,
        isLoading: false
      });

    default:
      return state;
  }
};
