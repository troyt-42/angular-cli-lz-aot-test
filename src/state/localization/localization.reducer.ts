import {Action} from '@ngrx/store';

import {LocalizationActions} from './localization.actions';
import {LocaleRepository, createDefaultLocaleRepository} from '../../models/localization';
import {updateObject} from '../util';
import {createLocaleMap} from './createLocaleMap';

export const localizationReducer =
    (state: LocaleRepository = createDefaultLocaleRepository(), action: Action): LocaleRepository => {

  switch (action.type) {
    case LocalizationActions.LOCALIZATION_RETRIEVE:
      return updateObject(state, {
        loading: true,
        locales: createLocaleMap()
      });

    case LocalizationActions.LOCALIZATION_SELECT:
      return updateObject(state, {
        current: action.payload.isocode
      });

    case LocalizationActions.LOCALIZATION_RETRIEVE_SUCCESS:
      return updateObject(state, {
        locales: createLocaleMap(action.payload.locales)
      });

    case LocalizationActions.LOCALIZATION_RETRIEVE_ERROR:
      return updateObject(state, {
        loading: false,
        locales: createLocaleMap(),
        failure: action.payload.error
      });

    default:
      return state;
  }
};
