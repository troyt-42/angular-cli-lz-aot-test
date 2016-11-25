import {LocaleMap} from './localeMap';
import {Locale} from './locale';

export interface LocaleRepository {
  readonly loading?: boolean;
  readonly locales?: LocaleMap;
  readonly current?: string; // ISO code
  readonly failure?: Error;
}

export function createDefaultLocaleRepository(): LocaleRepository {
  return {
    loading: true,
    locales: new Map<string, Locale>(),
    failure: null,
    current: null,
  };
}