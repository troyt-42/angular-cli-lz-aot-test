import {questionnaireCategoriesExist, Questionnaire, createDefaultQuestionnaire, getQuestions} from './questionnaire';
import {updateObject} from '../../state/util';
import {createCategory} from './category';
import {createQuestion} from './question';
import {QuestionTypes} from './questionTypes';

describe('Model: Questionnaire', () => {
  let questionnaire: Questionnaire;

  describe('questionnaireCategoriesExist()', () => {
    describe('when the questionnaire is falsy', () => {
      it('should return false', () => {
        expect(questionnaireCategoriesExist(null)).toEqual(false);
      });
    });

    describe('when the questionnaire has a falsy list of categories', () => {
      beforeEach(() => {
        questionnaire = updateObject(createDefaultQuestionnaire(), {
          categories: null
        });
      });

      it('should return false', () => {
        expect(questionnaireCategoriesExist(questionnaire)).toEqual(false);
      });
    });

    describe('when the questionnaire has zero categories', () => {
      beforeEach(() => {
        questionnaire = updateObject(createDefaultQuestionnaire(), {
          categories: []
        });
      });

      it('should return false', () => {
        expect(questionnaireCategoriesExist(questionnaire)).toEqual(false);
      });
    });

    describe('when the questionnaire has at least one category', () => {
      beforeEach(() => {
        questionnaire = updateObject(createDefaultQuestionnaire(), {
          categories: [
            createCategory([])
          ]
        });
      });

      it('should return true', () => {
        expect(questionnaireCategoriesExist(questionnaire)).toEqual(true);
      });
    });
  });

  describe('getQuestions()', () => {
    describe('when the questionnaire has no categories', () => {
      beforeEach(() => {
        questionnaire = updateObject(createDefaultQuestionnaire(), {
          categories: []
        });
      });

      it('should return an empty list', () => {
        expect(getQuestions(questionnaire)).toEqual([]);
      });
    });

    describe('when the questionnaire has categories', () => {
      beforeEach(() => {
        questionnaire = updateObject(createDefaultQuestionnaire(), {
          categories: [
            createCategory([
              createQuestion('1', 'Question 1', QuestionTypes.DROPDOWN, [])
            ]),
            createCategory([
              createQuestion('2', 'Question 2', QuestionTypes.CHECKBOX, [])
            ])
          ]
        });
      });

      it('should return all of the questions in all categories', () => {
        const questions = getQuestions(questionnaire);

        expect(questions.length).toEqual(2);
        expect(questions[0].id).toEqual(questionnaire.categories[0].questions[0].id);
        expect(questions[1].id).toEqual(questionnaire.categories[1].questions[0].id);
      });
    });
  });
});