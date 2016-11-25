import {createDefaultLocaleRepository} from '../models/localization/localeRepository';
import {updateObject} from '../state/util';

export function createTestLocalizationStrings(strings: any) {
  return {
    localization: updateObject(createDefaultLocaleRepository(), {
      current: 'en-US',
      locales: {
        'en-US': {
          'isocode': 'en-US',
          'description': 'English',
          'strings': strings
        }
      }
    })
  };
}