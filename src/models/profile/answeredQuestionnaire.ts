import {AnsweredQuestion} from './answeredQuestion';

export interface AnsweredQuestionnaire {
  readonly questionnaireId: string;
  readonly answers: Array<AnsweredQuestion>;
  readonly currentQuestionId: string;
}

export function createDefaultAnsweredQuestionnaire(): AnsweredQuestionnaire {
  return {
    questionnaireId: null,
    answers: [],
    currentQuestionId: null
  };
}