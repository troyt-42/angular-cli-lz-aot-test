import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../models/appState';

@Injectable()
export class QuestionnaireActions {

  static QUESTIONNAIRE_RETRIEVE = 'QUESTIONNAIRE_RETRIEVE';
  static QUESTIONNAIRE_RETRIEVE_SUCCESS = 'QUESTIONNAIRE_RETRIEVE_SUCCESS';
  static QUESTIONNAIRE_RETRIEVE_ERROR = 'QUESTIONNAIRE_RETRIEVE_ERROR';

  constructor(private store: Store<AppState>) {

  }

  loadQuestionnaire(questionnaireId: string) {
    return this.store.dispatch({
      type: QuestionnaireActions.QUESTIONNAIRE_RETRIEVE,
      payload: questionnaireId
    });
  }

}
