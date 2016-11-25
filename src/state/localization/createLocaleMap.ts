import {Locale, LocaleMap} from '../../models/localization';
import {updateObject} from '../util';

export const createLocaleMap = (locales: Array<Locale> = []): LocaleMap => {
  const map = new Map<string, Locale>();

  if (locales == null || locales.length === 0) {
    return map;
  }

  for (const locale of locales) {
    map.set(locale.isocode, updateObject(locale, {strings: locale.strings}));
  }

  return map;
};
