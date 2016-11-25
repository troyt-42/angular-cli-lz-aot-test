import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

import {IrisService, ErrorService} from '../../../services';
import {ActivationActions} from './activation.actions';
import {createAction} from '../../actions/createAction';
import {AuthenticationActions} from '../../authentication';
import {AppState} from '../../../models/appState';
import {Registration, createInvestorIrisCredentials} from '../../../models';

@Injectable()
export class ActivationEffects {
  registration: Registration;

  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private service: IrisService,
    private errorService: ErrorService
  ) {
    store.select(appState => appState.registration).subscribe(
      registration => this.registration = registration
    );
  }

  @Effect()
  activate$ = this.actions$
    .ofType(ActivationActions.REGISTRATION_ACTIVATE)
    .mergeMap<Action>(action => this.service.activate()
      .map(result => createAction(ActivationActions.REGISTRATION_ACTIVATE_SUCCESS, {
          result,
          username: this.registration.basicInfo.username,
          successRoute: action.payload.successRoute
        })
      )
      .catch(error => Observable.of(createAction(ActivationActions.REGISTRATION_ACTIVATE_ERROR, {
        error: this.errorService.createErrorFromResponse(error)
      })))
    );

  // Authenticate after a successful registration.
  @Effect()
  registrationSuccess = this.actions$
    .ofType(ActivationActions.REGISTRATION_ACTIVATE_SUCCESS)
    .map(action => createAction(AuthenticationActions.LOGIN_SEND, {
        credentials: createInvestorIrisCredentials(this.registration.basicInfo.username,
          this.registration.basicInfo.password),
        successRoute: action.payload.successRoute
      }));
}
