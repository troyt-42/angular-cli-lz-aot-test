import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs';

import {
  QuestionnaireService
} from '../../features/clientOnboarding/discovery/questionnaire/services/questionnaire.service';
import {QuestionnaireActions} from './questionnaire.actions';
import {createAction} from '../actions/createAction';

@Injectable()
export class QuestionnaireEffects {

  constructor(
    private actions$: Actions,
    private questionnaireService: QuestionnaireService
  ) {

  }

  @Effect()
  load$ = this.actions$
    .ofType(QuestionnaireActions.QUESTIONNAIRE_RETRIEVE)
    .mergeMap<Action>(action => this.questionnaireService.getQuestionnaire(action.payload)
      .map(questionnaire => {
        return !questionnaire || questionnaire.length === 0 ?
          createAction(
            QuestionnaireActions.QUESTIONNAIRE_RETRIEVE_ERROR,
            new Error('No questionnaire data')
          ) :
          createAction(QuestionnaireActions.QUESTIONNAIRE_RETRIEVE_SUCCESS, questionnaire[0]);
      })
      .catch(error => Observable.of(createAction(QuestionnaireActions.QUESTIONNAIRE_RETRIEVE_ERROR, error)))
    );

}
