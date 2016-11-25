import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';

import {InvestingGoalsActions} from './investingGoals.actions';
import {createAction} from '../actions/createAction';
import {IrisService} from '../../services/iris/iris.service';

@Injectable()
export class InvestingGoalsEffects {

  constructor(
    private actions$: Actions,
    private irisService: IrisService
  ) {

  }

  @Effect()
  load$ = this.actions$
    .ofType(InvestingGoalsActions.INVESTING_GOALS_RETRIEVE)
    .mergeMap<Action>(action => this.irisService.getInvestingGoals()
      .map(result => createAction(InvestingGoalsActions.INVESTING_GOALS_RETRIEVE_SUCCESS, result))
      .catch(error => Observable.of(createAction(InvestingGoalsActions.INVESTING_GOALS_RETRIEVE_ERROR, error)))
    );

}
