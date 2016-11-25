import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';

import {PasswordPolicyActions} from './index';
import {IrisService} from '../../services';
import {createAction} from '../actions/createAction';

@Injectable()
export class PasswordPolicyEffects {

  constructor(
    private actions$: Actions,
    private iris: IrisService
  ) {

  }

  @Effect()
  load$ = this.actions$
    .ofType(PasswordPolicyActions.PASSWORD_POLICY_RETRIEVE)
    .mergeMap<Action>(action => this.iris.getPasswordPolicy()
      .map(result => createAction(PasswordPolicyActions.PASSWORD_POLICY_RETRIEVE_SUCCESS, result))
      .catch(error => Observable.of(createAction(PasswordPolicyActions.PASSWORD_POLICY_RETRIEVE_ERROR, {error})))
    );

}
