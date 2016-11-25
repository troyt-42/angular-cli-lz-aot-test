import {SecurityQuestionListItem} from './securityQuestionListItem';

export interface SecurityQuestion {
  id: string;
  question: string;
};

export function getUnselectedSecurityQuestions(questions: Array<SecurityQuestion>,
  listItems: Array<SecurityQuestionListItem>): Array<SecurityQuestion> {
  return questions.filter(question => !isQuestionSelected(question, listItems));
};

export function isQuestionSelected(question: SecurityQuestion,
  listItems: Array<SecurityQuestionListItem>): boolean {
  return !!listItems.find((item) => item.selectedQuestionId === question.id);
}

export function getSecurityQuestionById(questions: Array<SecurityQuestion>,
  id: string): SecurityQuestion {
  return questions.find((question) => question.id === id);
}
