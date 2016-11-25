import {Action} from '@ngrx/store';

import {sortInvestingGoalArray} from '../../models/investingGoals';
import {InvestingGoalsActions} from './investingGoals.actions';
import {InvestingGoals, createDefaultInvestingGoals} from '../../models/investingGoals/investingGoals';
import {updateObject} from '../util';

export const investingGoalsReducer =
    (state: InvestingGoals = createDefaultInvestingGoals(), action: Action): InvestingGoals => {

  switch (action.type) {
    case InvestingGoalsActions.INVESTING_GOALS_RETRIEVE:
      return updateObject(state, {
        isLoading: true,
        isReceived: false,
        error: null
      });

    case InvestingGoalsActions.INVESTING_GOALS_RETRIEVE_SUCCESS:
      return updateObject(state, {
        isLoading: false,
        isReceived: true,
        error: null,
        list: sortInvestingGoalArray(action.payload)
      });

    case InvestingGoalsActions.INVESTING_GOALS_RETRIEVE_ERROR:
      return updateObject(state, {
        isLoading: false,
        isReceived: false,
        error: action.payload
      });

    default:
      return state;
  }
};
