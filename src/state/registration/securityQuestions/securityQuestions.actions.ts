import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../models/appState';


@Injectable()
export class SecurityQuestionsActions {
  static SECURITY_QUESTIONS_RETRIEVE = 'SECURITY_QUESTIONS_RETRIEVE';
  static SECURITY_QUESTIONS_SUCCESS = 'SECURITY_QUESTIONS_SUCCESS';
  static SECURITY_QUESTIONS_ERROR = 'SECURITY_QUESTIONS_ERROR';

  static SECURITY_QUESTIONS_LIST_ADD = 'SECURITY_QUESTIONS_LIST_ADD';
  static SECURITY_QUESTIONS_LIST_REMOVE = 'SECURITY_QUESTIONS_LIST_REMOVE';
  static SECURITY_QUESTIONS_LIST_SELECT = 'SECURITY_QUESTIONS_LIST_SELECT';
  static SECURITY_QUESTIONS_LIST_SET_ANSWER = 'SECURITY_QUESTIONS_LIST_SET_ANSWER';

  constructor(private store: Store<AppState>) { }

  retrieveSecurityQuestions() {
    return this.store.dispatch({
      type: SecurityQuestionsActions.SECURITY_QUESTIONS_RETRIEVE
    });
  }

  addSecurityQuestionListItem() {
    this.store.dispatch({
      type: SecurityQuestionsActions.SECURITY_QUESTIONS_LIST_ADD
    });
  }

  removeSecurityQuestionListItem(index: number) {
    this.store.dispatch({
      type: SecurityQuestionsActions.SECURITY_QUESTIONS_LIST_REMOVE,
      payload: {
        index
      }
    });
  }

  securityQuestionListSelect(listItemIndex: number, selectedQuestionId: string) {
    this.store.dispatch({
      type: SecurityQuestionsActions.SECURITY_QUESTIONS_LIST_SELECT,
      payload: {
        listItemIndex,
        selectedQuestionId
      }
    });
  }

  securityQuestionListSetAnswer(listItemIndex: number, answer: string) {
    this.store.dispatch({
      type: SecurityQuestionsActions.SECURITY_QUESTIONS_LIST_SET_ANSWER,
      payload: {
        listItemIndex,
        answer
      }
    });
  }
}
