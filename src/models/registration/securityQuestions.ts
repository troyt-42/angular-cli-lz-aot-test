import {Loadable} from '../loadable';
import {SecurityQuestion} from './securityQuestion';
import {SecurityQuestionListItem, createDefaultSecurityQuestionListItem} from './securityQuestionListItem';

export interface SecurityQuestions extends Loadable {
  readonly questions: Array<SecurityQuestion>;
  readonly list: Array<SecurityQuestionListItem>;
}

export function createDefaultSecurityQuestions() {
  return {
    questions: [],
    list: [createDefaultSecurityQuestionListItem()],
    isLoading: false,
    isReceived: false,
    error: null
  };
}
