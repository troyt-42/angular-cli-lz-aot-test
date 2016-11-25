import {Question} from './question';

export interface Category {
  readonly questions: Array<Question>;
}

export function createCategory(questions: Array<Question>) {
  return {
    questions
  };
}