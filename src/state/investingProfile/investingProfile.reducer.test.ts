import {investingProfileReducer} from './investingProfile.reducer';
import {InvestingProfileActions} from './investingProfile.actions';
import {InvestingProfile} from '../../models/investingProfile/investingProfile';
import {createAction} from '../actions/createAction';

describe('Investing Profile Reducer', () => {
  let initState: InvestingProfile;

  it('should set loading to true on INVESTING_PROFILE_RETRIEVE', () => {
    const nextState = investingProfileReducer(
      initState,
      createAction(InvestingProfileActions.INVESTING_PROFILE_RETRIEVE)
    );

    expect(nextState.isLoading).toBeTruthy();
    expect(nextState.error).toBeFalsy();
    expect(nextState.isReceived).toBeFalsy();
  });

  it('should save profile on INVESTING_PROFILE_RETRIEVE_SUCCESS', () => {
    const nextState = investingProfileReducer(
      initState,
      createAction(InvestingProfileActions.INVESTING_PROFILE_RETRIEVE_SUCCESS, {
        code: 'code',
        name: 'name',
        title: 'title'
      })
    );

    expect(nextState.isLoading).toBeFalsy();
    expect(nextState.error).toBeFalsy();
    expect(nextState.code).toEqual('code');
    expect(nextState.name).toEqual('name');
    expect(nextState.title).toEqual('title');
  });

  it('should flag an error on INVESTING_PROFILE_RETRIEVE_ERROR', () => {
    const nextState = investingProfileReducer(
      initState,
      createAction(InvestingProfileActions.INVESTING_PROFILE_RETRIEVE_ERROR, 'error msg')
    );

    expect(nextState.isLoading).toBeFalsy();
    expect(nextState.error).toBeTruthy('error msg');
  });
});
