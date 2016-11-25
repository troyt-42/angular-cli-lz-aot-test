import {Registration} from '../../models/registration/registration';
import {registrationReducer} from './registration.reducer';
import {RegistrationActions} from './registration.actions';
import {createAction} from '../actions/createAction';

describe('Registration Reducer', () => {
  let initState: Registration;


  it('should set basicInfo on REGISTRATION_SET_BASIC_INFO', () => {
    const fakeInfo = {
      email: 'test@testing.com',
      password: 'pass',
      username: 'user',
      consentForEmailNotification: true
    };

    const nextState = registrationReducer(
      initState,
      createAction(RegistrationActions.REGISTRATION_SET_BASIC_INFO, {
        info: fakeInfo
      })
    );

    expect(nextState.basicInfo).toEqual(fakeInfo);
  });
});
