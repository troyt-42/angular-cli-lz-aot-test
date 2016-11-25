import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {AnsweredQuestion} from '../../../models/profile/answeredQuestion';
import {AppState} from '../../../models/appState';

@Injectable()
export class AnsweredQuestionnaireActions {

  static UPDATING_QUESTIONNAIRE_CURRENT_QUESTION = 'UPDATING_QUESTIONNAIRE_CURRENT_QUESTION';
  static UPDATING_QUESTIONNAIRE_ANSWERS = 'UPDATING_QUESTIONNAIRE_ANSWERS';

  constructor(private store: Store<AppState>) {}

  updateCurrentQuestion(questionnaireId: string, currentQuestionId: string) {
    return this.store.dispatch({
      type: AnsweredQuestionnaireActions.UPDATING_QUESTIONNAIRE_CURRENT_QUESTION,
      payload: {
        questionnaireId,
        currentQuestionId
      }
    });
  }

  updateQuestionnaireAnswers(answers: Array<AnsweredQuestion>) {
    return this.store.dispatch({
      type: AnsweredQuestionnaireActions.UPDATING_QUESTIONNAIRE_ANSWERS,
      payload: answers
    });
  }

}
