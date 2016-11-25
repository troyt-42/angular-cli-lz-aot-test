import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs';

import {ModelPortfolioActions} from './modelPortfolio.actions';
import {
  ModelPortfolioService
} from '../../features/clientOnboarding/createAPlan/modelPortfolio/services/modelPortfolio.service';
import {createAction} from '../actions/createAction';

@Injectable()
export class ModelPortfolioEffects {

  constructor(
    private actions$: Actions,
    private modelPortfolioService: ModelPortfolioService
  ) {

  }

  @Effect()
  load$ = this.actions$
    .ofType(ModelPortfolioActions.MODEL_PORTFOLIO_RETRIEVE)
    .mergeMap<Action>(action => this.modelPortfolioService.getModelPortfolio(action.payload)
      .map(result => createAction(ModelPortfolioActions.MODEL_PORTFOLIO_RETRIEVE_SUCCESS, result))
      .catch(error => Observable.of(createAction(ModelPortfolioActions.MODEL_PORTFOLIO_RETRIEVE_ERROR, error)))
    );

}
