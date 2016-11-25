import {Action} from '@ngrx/store';

import {AnsweredQuestionnaireActions} from './answeredQuestionnaire.actions';
import {AnsweredQuestionnaire, createDefaultAnsweredQuestionnaire} from '../../../models/profile/answeredQuestionnaire';
import {updateObject} from '../../util';

export const answeredQuestionnaireReducer = (
  state: AnsweredQuestionnaire = createDefaultAnsweredQuestionnaire(),
  action: Action
): AnsweredQuestionnaire => {
  switch (action.type) {
    case AnsweredQuestionnaireActions.UPDATING_QUESTIONNAIRE_CURRENT_QUESTION:
      return updateObject(state, {
        questionnaireId: action.payload.questionnaireId,
        currentQuestionId: action.payload.currentQuestionId
      });

    case AnsweredQuestionnaireActions.UPDATING_QUESTIONNAIRE_ANSWERS:
      return updateObject(state, {
        answers: action.payload
      });

    default:
      return state;
  }
};
