import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../models/appState';

@Injectable()
export class ModelPortfolioActions {

  static MODEL_PORTFOLIO_RETRIEVE = 'MODEL_PORTFOLIO_RETRIEVE';
  static MODEL_PORTFOLIO_RETRIEVE_SUCCESS = 'MODEL_PORTFOLIO_RETRIEVE_SUCCESS';
  static MODEL_PORTFOLIO_RETRIEVE_ERROR = 'MODEL_PORTFOLIO_RETRIEVE_ERROR';

  constructor(private store: Store<AppState>) {

  }

  loadModelPortfolio(modelPortfolioId: string) {
    return this.store.dispatch({
      type: ModelPortfolioActions.MODEL_PORTFOLIO_RETRIEVE,
      payload: modelPortfolioId
    });
  }

}
