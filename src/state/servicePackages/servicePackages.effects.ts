import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';

import {ServicePackagesActions} from './servicePackages.actions';
import {
  ServicePackageService
} from '../../features/clientOnboarding/createAPlan/servicePackages/services/servicePackage.service';
import {createAction} from '../actions/createAction';

@Injectable()
export class ServicePackageEffects {

  constructor(
    private actions$: Actions,
    private loader: ServicePackageService
  ) {

  }

  @Effect()
  load$ = this.actions$
    .ofType(ServicePackagesActions.SERVICE_PACKAGES_RETRIEVE)
    .mergeMap<Action>(action => this.loader.fetch()
      .map(result => createAction(ServicePackagesActions.SERVICE_PACKAGES_RETRIEVE_SUCCESS, result))
      .catch(error => Observable.of(createAction(ServicePackagesActions.SERVICE_PACKAGES_RETRIEVE_ERROR, error)))
    );

}
