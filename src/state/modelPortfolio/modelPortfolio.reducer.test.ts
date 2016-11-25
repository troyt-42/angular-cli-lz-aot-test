import {modelPortfolioReducer} from './modelPortfolio.reducer';
import {ModelPortfolioActions} from './modelPortfolio.actions';
import {ModelPortfolio} from '../../models/modelPortfolio/modelPortfolio';
import {createAction} from '../actions/createAction';

describe('Model Portfolio Reducer', () => {
  let initState: ModelPortfolio;

  it('should set loading to true on MODEL_PORTFOLIO_RETRIEVE', () => {
    const nextState = modelPortfolioReducer(
      initState,
      createAction(ModelPortfolioActions.MODEL_PORTFOLIO_RETRIEVE)
    );

    expect(nextState.isLoading).toBeTruthy();
    expect(nextState.error).toBeFalsy();
    expect(nextState.isReceived).toBeFalsy();
  });

  it('should save model portfolios on MODEL_PORTFOLIO_RETRIEVE_SUCCESS', () => {
    const nextState = modelPortfolioReducer(
      initState,
      createAction(ModelPortfolioActions.MODEL_PORTFOLIO_RETRIEVE_SUCCESS, {
        modelSysId: 'sys id'
      })
    );

    expect(nextState.isLoading).toBeFalsy();
    expect(nextState.error).toBeFalsy();
    expect(nextState.modelSysId).toEqual('sys id');
  });

  it('should flag an error on MODEL_PORTFOLIO_RETRIEVE_ERROR', () => {
    const nextState = modelPortfolioReducer(
      initState,
      createAction(ModelPortfolioActions.MODEL_PORTFOLIO_RETRIEVE_ERROR, 'error msg')
    );

    expect(nextState.isLoading).toBeFalsy();
    expect(nextState.error).toBeTruthy('error msg');
  });
});
