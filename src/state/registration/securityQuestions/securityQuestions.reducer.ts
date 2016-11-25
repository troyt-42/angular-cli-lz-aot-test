import {SecurityQuestions, createDefaultSecurityQuestions} from '../../../models/registration/securityQuestions';
import {Action} from '@ngrx/store';
import {SecurityQuestionsActions} from './securityQuestions.actions';
import {updateObject, updateItemInArrayByIndex} from '../../util';
import {createDefaultSecurityQuestionListItem} from '../../../models/registration/securityQuestionListItem';

export const securityQuestionsReducer = (state: SecurityQuestions = createDefaultSecurityQuestions(),
                                         action: Action
): SecurityQuestions => {
  switch (action.type) {
    case SecurityQuestionsActions.SECURITY_QUESTIONS_RETRIEVE:
      return updateObject(state, {
        isLoading: true
      });

    case SecurityQuestionsActions.SECURITY_QUESTIONS_SUCCESS:
      return updateObject(state, {
        isReceived: true,
        isLoading: false,
        questions: action.payload.questions
      });

    case SecurityQuestionsActions.SECURITY_QUESTIONS_ERROR:
      return updateObject(state, {
        isLoading: false,
        error: action.payload.error
      });

    case SecurityQuestionsActions.SECURITY_QUESTIONS_LIST_ADD:
      return updateObject(state, {
        list: [...state.list, createDefaultSecurityQuestionListItem()]
      });

    case SecurityQuestionsActions.SECURITY_QUESTIONS_LIST_REMOVE:
      return updateObject(state, {
        list: state.list.filter((item, index) => index !== action.payload.index)
      });

    case SecurityQuestionsActions.SECURITY_QUESTIONS_LIST_SELECT:
      return updateObject(state, {
        list: updateItemInArrayByIndex(state.list, action.payload.listItemIndex, (item) => {
          return updateObject(item, {
            selectedQuestionId: action.payload.selectedQuestionId
          });
        })
      });

    case SecurityQuestionsActions.SECURITY_QUESTIONS_LIST_SET_ANSWER:
      return updateObject(state, {
        list: updateItemInArrayByIndex(state.list, action.payload.listItemIndex, (item) => {
          return updateObject(item, {
            answer: action.payload.answer
          });
        })
      });

    default:
      return state;
  }
};

