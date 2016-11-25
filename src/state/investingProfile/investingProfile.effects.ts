import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs';

import {
  InvestmentStrategyService
} from '../../features/clientOnboarding/discovery/investmentStrategy/services/investmentStrategy.service';
import {InvestingProfileActions} from './investingProfile.actions';
import {createAction} from '../actions/createAction';

@Injectable()
export class InvestingProfileEffects {

  constructor(
    private actions$: Actions,
    private investmentStrategyService: InvestmentStrategyService
  ) {

  }

  @Effect()
  load$ = this.actions$
    .ofType(InvestingProfileActions.INVESTING_PROFILE_RETRIEVE)
    .mergeMap<Action>(action => this.investmentStrategyService.getInvestmentProfile(action.payload)
      .map(result => createAction(InvestingProfileActions.INVESTING_PROFILE_RETRIEVE_SUCCESS, result))
      .catch(error => Observable.of(createAction(InvestingProfileActions.INVESTING_PROFILE_RETRIEVE_ERROR, error)))
    );

}
