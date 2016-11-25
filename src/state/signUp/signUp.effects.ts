import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';

import {SignUpActions} from './index';
import {ProfileActions} from '../profile/profile.actions';

import {
  SignUpService
} from '../../features/clientOnboarding/discovery/signUp/services/signUp/signUp.service';
import {createAction} from '../actions/createAction';

@Injectable()
export class SignUpEffects {

  constructor(
    private actions$: Actions,
    private signUpService: SignUpService,
    private profileActions: ProfileActions
  ) {
  }

  @Effect()
  signUp$ = this.actions$
    .ofType(SignUpActions.SIGN_UP_SEND)
    .do(action => action.payload.email = action.payload.email.trim().toLowerCase())
    .mergeMap<Action>(action => this.signUpService.signUp(action.payload.email, action.payload.password)
      .map(() => {
        this.profileActions.setUserEmailAddress(action.payload.email);

        return createAction(SignUpActions.SIGN_UP_SEND_SUCCESS, {
          email: action.payload.email,
          consentForEmailNotification: action.payload.consentForEmailNotification
        });
      })
      .catch(error => Observable.of(createAction(SignUpActions.SIGN_UP_SEND_ERROR, error)))
    );

}
