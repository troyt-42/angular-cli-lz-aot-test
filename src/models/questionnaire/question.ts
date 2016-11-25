import {AnswerOption} from './answerOption';

export interface Question {
  readonly id: string;
  readonly label: string;
  readonly type: string;
  readonly answerOptions: Array<AnswerOption>;
  readonly imageSource?: string;
}

export function createQuestion(
  id: string, label: string, type: string, answerOptions: Array<AnswerOption>, imageSource?: string
) {
  return {
    id, label, type, answerOptions, imageSource
  };
}