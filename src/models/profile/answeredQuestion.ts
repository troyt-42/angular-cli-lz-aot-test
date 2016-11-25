import {AnswerOption} from '../questionnaire/answerOption';

export interface AnsweredQuestion {
  readonly questionId: string;
  readonly isAnswered: boolean;
  readonly answeredOptions: Array<AnswerOption>;
  readonly value?: number;
}