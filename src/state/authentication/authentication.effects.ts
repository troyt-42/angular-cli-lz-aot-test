import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {go} from '@ngrx/router-store';

import {IrisService} from '../../services';
import {AuthenticationActions} from './authentication.actions';
import {CustomizationActions} from '../customization/customization.actions';
import {createAction} from '../actions/createAction';

@Injectable()
export class AuthenticationEffects {

  constructor(
    private actions$: Actions,
    private service: IrisService
  ) {
  }

  @Effect()
  anonymousLoginStart$ = this.actions$
    .ofType(CustomizationActions.CUSTOMIZATIONS_RETRIEVE_SUCCESS)
    .map(action => createAction(AuthenticationActions.ANONYMOUS_LOGIN_SEND, {
      credentials: {
        userType: action.payload.irisServer.anonymousCredentials.userType,
        username: action.payload.irisServer.anonymousCredentials.username,
        password: action.payload.irisServer.anonymousCredentials.password
      }
    }));

  @Effect()
  userLogin$ = this.actions$
    .ofType(AuthenticationActions.LOGIN_SEND)
    .mergeMap<Action>(action => this.service.login(action.payload.credentials)
      .map(result => createAction(AuthenticationActions.LOGIN_SEND_SUCCESS, {
        result,
        username: action.payload.credentials.username,
        successRoute: action.payload.successRoute
      }))
      .catch(response => Observable.of(createAction(AuthenticationActions.LOGIN_SEND_ERROR,
        response.json()
      )))
    );

  @Effect()
  getUser$ = this.actions$
    .ofType(AuthenticationActions.GET_USER)
    .mergeMap<Action>(action => this.service.get('/user')
      .map(result => createAction(AuthenticationActions.GET_USER_SUCCESS, {
        result,
        successRoute: action.payload.successRoute
      }))
      .catch(response => Observable.of(createAction(AuthenticationActions.GET_USER_ERROR,
        response.json()
      )))
    );

  @Effect()
  anonymousLogin$ = this.actions$
    .ofType(AuthenticationActions.ANONYMOUS_LOGIN_SEND)
    .mergeMap<Action>(action => this.service.login(action.payload.credentials)
      .map(result => createAction(AuthenticationActions.ANONYMOUS_LOGIN_SEND_SUCCESS, {
        result
      }))
      .catch(response => Observable.of(createAction(AuthenticationActions.ANONYMOUS_LOGIN_SEND_ERROR,
        response.json()
      )))
    );

  @Effect()
  loginSuccessRoute$ = this.actions$
    .ofType(AuthenticationActions.GET_USER_SUCCESS)
    .filter(action => !!action.payload.successRoute)
    .map(action => go([action.payload.successRoute]));

  @Effect()
  getUserAfterLogin$ = this.actions$
    .ofType(AuthenticationActions.LOGIN_SEND_SUCCESS)
    .map(action => createAction(AuthenticationActions.GET_USER, {
      successRoute: action.payload.successRoute
    }));
}
