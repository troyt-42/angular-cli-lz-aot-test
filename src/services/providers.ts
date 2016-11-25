import { AppPreferencesService } from './app-preferences';
import { AppStateService } from './appStateService';
import { ArrayService } from './array';
import { CustomizationService } from './customization';
import { ErrorService } from './error';
import { IrisService } from './iris';
import { LocaleLoaderService, LocaleService } from './locale';
import { LocationService } from './location';

export const serviceProviders = [
  AppPreferencesService,
  AppStateService,
  ArrayService,
  CustomizationService,
  ErrorService,
  IrisService,
  LocaleLoaderService,
  LocaleService,
  LocationService
];
