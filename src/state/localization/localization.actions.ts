import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../models/appState';

@Injectable()
export class LocalizationActions {

  static LOCALIZATION_RETRIEVE = 'LOCALIZATION_RETRIEVE';
  static LOCALIZATION_RETRIEVE_SUCCESS = 'LOCALIZATION_RETRIEVE_SUCCESS';
  static LOCALIZATION_RETRIEVE_ERROR = 'LOCALIZATION_RETRIEVE_ERROR';
  static LOCALIZATION_SELECT = 'LOCALIZATION_SELECT';

  constructor(private store: Store<AppState>) {}

  initialize() {
    this.store.dispatch({
      type: LocalizationActions.LOCALIZATION_RETRIEVE,
    });
  }

  select(isocode: string) {
    this.store.dispatch({
      type: LocalizationActions.LOCALIZATION_SELECT,
      payload: { isocode },
    });
  }
}
