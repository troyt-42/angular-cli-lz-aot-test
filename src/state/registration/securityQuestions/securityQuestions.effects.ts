import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {SecurityQuestionsActions} from './securityQuestions.actions';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs';
import {createAction} from '../../actions/createAction';
import {IrisService} from '../../../services/iris/iris.service';

@Injectable()
export class SecurityQuestionsEffects {
  constructor(
    private actions$: Actions,
    private service: IrisService
  ) { }

  @Effect()
  retrieveSecurityQuestions$ = this.actions$
    .ofType(SecurityQuestionsActions.SECURITY_QUESTIONS_RETRIEVE)
    .mergeMap<Action>(action => this.service.get(`/realm/securityQuestions`)
      .map(result => {
        return createAction(SecurityQuestionsActions.SECURITY_QUESTIONS_SUCCESS, {
          questions: result
        });
      })
      .catch(error => {
        return Observable.of(createAction(SecurityQuestionsActions.SECURITY_QUESTIONS_ERROR, {
          error: new Error('Failed to get security questions')
        }));
      })
    );
}
