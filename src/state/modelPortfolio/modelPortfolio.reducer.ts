import {Action} from '@ngrx/store';

import {ModelPortfolioActions} from './modelPortfolio.actions';
import {ModelPortfolio, createDefaultModelPortfolio} from '../../models/modelPortfolio';
import {updateObject} from '../util';

export const modelPortfolioReducer =
  (state: ModelPortfolio = createDefaultModelPortfolio(), action: Action): ModelPortfolio => {

  switch (action.type) {
    case ModelPortfolioActions.MODEL_PORTFOLIO_RETRIEVE:
      return updateObject(state, {
        isLoading: true,
        isReceived: false,
        error: null
      });

    case ModelPortfolioActions.MODEL_PORTFOLIO_RETRIEVE_SUCCESS:
      return updateObject(state, {
        isLoading: false,
        isReceived: true,
        error: null,
        modelSysId: action.payload.modelSysId,
        shortDescription: action.payload.shortDescription,
        description: action.payload.description,
        ror: action.payload.ror,
        investmentList: action.payload.investmentList,
        assetAllocations: action.payload.assetAllocations
      });

    case ModelPortfolioActions.MODEL_PORTFOLIO_RETRIEVE_ERROR:
      return updateObject(state, {
        isLoading: false,
        isReceived: false,
        error: action.payload
      });

    default:
      return state;
  }
};
