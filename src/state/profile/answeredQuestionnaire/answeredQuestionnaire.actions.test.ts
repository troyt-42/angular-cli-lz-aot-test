import {AnsweredQuestionnaireActions} from './answeredQuestionnaire.actions';
import {MockStore} from '../../../test/mockStore';

describe('AnsweredQuestionnaireActions', () => {
  let actions: AnsweredQuestionnaireActions,
      store: MockStore;

  beforeEach(() => {
    store = new MockStore();
    actions = new AnsweredQuestionnaireActions(store);
  });

  describe('updateQuestionnaireAnswers()', () => {
    let answers;

    beforeEach(() => {
      answers = [];
    });

    it('should dispatch UPDATING_QUESTIONNAIRE_ANSWERS action', () => {
      spyOn(store, 'dispatch');

      actions.updateQuestionnaireAnswers(answers);

      expect(store.dispatch).toHaveBeenCalledWith({
        type: AnsweredQuestionnaireActions.UPDATING_QUESTIONNAIRE_ANSWERS,
        payload: answers
      });
    });
  });

  describe('updateCurrentQuestion()', () => {
    let questionnaireId, currentQuestionId;

    beforeEach(() => {
      questionnaireId = '1';
      currentQuestionId = '2';
    });

    it('should dispatch UPDATING_QUESTIONNAIRE_CURRENT_QUESTION action', () => {
      spyOn(store, 'dispatch');

      actions.updateCurrentQuestion(questionnaireId, currentQuestionId);

      expect(store.dispatch).toHaveBeenCalledWith({
        type: AnsweredQuestionnaireActions.UPDATING_QUESTIONNAIRE_CURRENT_QUESTION,
        payload: {
          questionnaireId,
          currentQuestionId
        }
      });
    });
  });

});
