import {investingGoalsReducer} from './investingGoals.reducer';
import {InvestingGoalsActions} from './investingGoals.actions';
import {InvestingGoals} from '../../models/investingGoals/investingGoals';
import {createAction} from '../actions/createAction';

describe('Investing Goals Reducer', () => {
  let initState: InvestingGoals;

  it('should set loading to true on INVESTING_GOALS_RETRIEVE', () => {
    const nextState = investingGoalsReducer(
      initState,
      createAction(InvestingGoalsActions.INVESTING_GOALS_RETRIEVE)
    );

    expect(nextState.isLoading).toBeTruthy();
    expect(nextState.error).toBeFalsy();
    expect(nextState.isReceived).toBeFalsy();
  });

  it('should save goals list on INVESTING_GOALS_RETRIEVE_SUCCESS', () => {
    const nextState = investingGoalsReducer(
      initState,
      createAction(InvestingGoalsActions.INVESTING_GOALS_RETRIEVE_SUCCESS, [{
        goalCode: 'A',
        name: 'Goal A',
        sortOrder: 3
      }, {
        goalCode: 'B',
        name: 'Goal B',
        sortOrder: 1
      }, {
        goalCode: 'C',
        name: 'Goal C',
        sortOrder: 2
      }])
    );

    expect(nextState.isLoading).toBeFalsy();
    expect(nextState.error).toBeFalsy();
    expect(nextState.list.length).toEqual(3);
    expect(nextState.list[0].goalCode).toEqual('B');
    expect(nextState.list[1].goalCode).toEqual('C');
    expect(nextState.list[2].goalCode).toEqual('A');
  });

  it('should flag an error on INVESTING_GOALS_RETRIEVE_ERROR', () => {
    const nextState = investingGoalsReducer(
      initState,
      createAction(InvestingGoalsActions.INVESTING_GOALS_RETRIEVE_ERROR, 'error msg')
    );

    expect(nextState.isLoading).toBeFalsy();
    expect(nextState.error).toBeTruthy('error msg');
  });
});
