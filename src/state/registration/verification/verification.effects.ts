import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';

import {IrisService} from '../../../services';
import {VerificationActions} from './verification.actions';
import {createAction} from '../../actions/createAction';

@Injectable()
export class VerificationEffects {

  constructor(
    private actions$: Actions,
    private service: IrisService
  ) {

  }

  @Effect()
  verify$ = this.actions$
    .ofType(VerificationActions.REGISTRATION_VERIFY)
    .mergeMap<Action>(action => this.service.verifyRegistration(action.payload.userId, action.payload.token)
      .map(result => createAction(VerificationActions.REGISTRATION_VERIFY_SUCCESS, {
          result,
          userId: action.payload.userId,
          token: action.payload.token
        })
      )
      .catch(error =>  Observable.of(createAction(VerificationActions.REGISTRATION_VERIFY_ERROR, {
        error: new Error()
      })))
    );

}
