import {Action} from '@ngrx/store';

import {QuestionnaireActions} from './questionnaire.actions';
import {Questionnaire, createDefaultQuestionnaire} from '../../models/questionnaire/questionnaire';
import {updateObject} from '../util';

export const questionnaireReducer =
  (state: Questionnaire = createDefaultQuestionnaire(), action: Action): Questionnaire => {

  switch (action.type) {
    case QuestionnaireActions.QUESTIONNAIRE_RETRIEVE:
      return updateObject(state, {
        isLoading: true,
        isReceived: false,
        error: null
      });

    case QuestionnaireActions.QUESTIONNAIRE_RETRIEVE_SUCCESS:
      return updateObject(state, {
        isLoading: false,
        isReceived: true,
        error: null,
        questionnaireId: action.payload.questionnaireId,
        goalCode: action.payload.goalCode,
        categories: action.payload.categories
      });

    case QuestionnaireActions.QUESTIONNAIRE_RETRIEVE_ERROR:
      return updateObject(state, {
        isLoading: false,
        isReceived: false,
        error: action.payload
      });

    default:
      return state;
  }
};
