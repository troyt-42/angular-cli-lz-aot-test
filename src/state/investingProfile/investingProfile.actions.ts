import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../models/appState';

@Injectable()
export class InvestingProfileActions {

  static INVESTING_PROFILE_RETRIEVE = 'INVESTING_PROFILE_RETRIEVE';
  static INVESTING_PROFILE_RETRIEVE_SUCCESS = 'INVESTING_PROFILE_RETRIEVE_SUCCESS';
  static INVESTING_PROFILE_RETRIEVE_ERROR = 'INVESTING_PROFILE_RETRIEVE_ERROR';

  constructor(private store: Store<AppState>) {}

  loadInvestingProfile(investingProfileId: string) {
    return this.store.dispatch({
      type: InvestingProfileActions.INVESTING_PROFILE_RETRIEVE,
      payload: investingProfileId
    });
  }

}
