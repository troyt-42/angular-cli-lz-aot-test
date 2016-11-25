import {servicePackagesReducer} from './servicePackages.reducer';
import {ServicePackagesActions} from './servicePackages.actions';
import {ServicePackages} from '../../models/servicePackage/servicePackages';
import {createAction} from '../actions/createAction';

describe('Service Package Reducer', () => {
  let initState: ServicePackages;

  it('should set loading to true on SERVICE_PACKAGES_RETRIEVE', () => {
    const nextState = servicePackagesReducer(
      initState,
      createAction(ServicePackagesActions.SERVICE_PACKAGES_RETRIEVE)
    );

    expect(nextState.isLoading).toBeTruthy();
    expect(nextState.error).toBeFalsy();
    expect(nextState.isReceived).toBeFalsy();
  });

  it('should save service packages on SERVICE_PACKAGES_RETRIEVE_SUCCESS', () => {
    const nextState = servicePackagesReducer(
      initState,
      createAction(ServicePackagesActions.SERVICE_PACKAGES_RETRIEVE_SUCCESS, [{
        name: 'Gold package',
        descriptions: [],
        feePercentage: 0.5,
        features: [],
        detailsUrl: 'http://www.rangle.io'
      }])
    );

    expect(nextState.isLoading).toBeFalsy();
    expect(nextState.error).toBeFalsy();
    expect(nextState.servicePackages.length).toEqual(1);
    expect(nextState.servicePackages[0].feePercentage).toEqual(0.5);
  });

  it('should flag an error on SERVICE_PACKAGES_RETRIEVE_ERROR', () => {
    const nextState = servicePackagesReducer(
      initState,
      createAction(ServicePackagesActions.SERVICE_PACKAGES_RETRIEVE_ERROR, 'error msg')
    );

    expect(nextState.isLoading).toBeFalsy();
    expect(nextState.error).toBeTruthy('error msg');
  });
});
