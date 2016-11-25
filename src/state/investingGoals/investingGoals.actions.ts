import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../models/appState';
import {createAction} from '../actions/createAction';

@Injectable()
export class InvestingGoalsActions {

  static INVESTING_GOALS_RETRIEVE = 'INVESTING_GOALS_RETRIEVE';
  static INVESTING_GOALS_RETRIEVE_SUCCESS = 'INVESTING_GOALS_RETRIEVE_SUCCESS';
  static INVESTING_GOALS_RETRIEVE_ERROR = 'INVESTING_GOALS_RETRIEVE_ERROR';

  constructor(private store: Store<AppState>) {

  }

  load() {
    this.store.dispatch(createAction(InvestingGoalsActions.INVESTING_GOALS_RETRIEVE));
  }

}
