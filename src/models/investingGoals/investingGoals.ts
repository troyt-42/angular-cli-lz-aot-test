import {Loadable} from '../loadable';
import {InvestingGoal} from './investingGoal';

export interface InvestingGoals extends Loadable {
  readonly list: Array<InvestingGoal>;
}

export function createDefaultInvestingGoals(): InvestingGoals {
  return {
    isLoading: false,
    isReceived: false,
    list: [],
    error: null
  };
}