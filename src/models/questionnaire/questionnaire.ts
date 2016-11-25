import {Loadable} from '../loadable';
import {Category} from './category';
import {Question} from './question';

export interface Questionnaire extends Loadable {
  readonly questionnaireId: string;
  readonly goalCode: string;
  readonly categories: Array<Category>;
}

export function createDefaultQuestionnaire(): Questionnaire {
  return {
    isLoading: false,
    isReceived: false,
    error: null,
    questionnaireId: null,
    goalCode: null,
    categories: null
  };
}

export const questionnaireCategoriesExist = (questionnaire: Questionnaire) => {
  return !!questionnaire &&
    !!questionnaire.categories &&
    questionnaire.categories.length > 0;
};

export function getQuestions(questionnaire: Questionnaire): Array<Question> {
  if (!questionnaireCategoriesExist(questionnaire)) {
    return [];
  }

  return questionnaire.categories.reduce(
    (questions, category) => {
      return questions.concat(category.questions);
    }, []
  );
}