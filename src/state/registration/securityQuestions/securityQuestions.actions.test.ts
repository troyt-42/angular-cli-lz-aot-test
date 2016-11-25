import {MockStore} from '../../../test/mockStore';
import {SecurityQuestionsActions} from './securityQuestions.actions';

describe('Security questions', () => {
  let actions: SecurityQuestionsActions;
  let store: MockStore;

  beforeEach(() => {
    store = new MockStore();
    actions = new SecurityQuestionsActions(store);
  });

  it('addSecurityQuestionListItem should dispatch SECURITY_QUESTIONS_LIST_ADD action', () => {
    const expectedAction = {
      type: SecurityQuestionsActions.SECURITY_QUESTIONS_LIST_ADD
    };

    spyOn(store, 'dispatch');
    actions.addSecurityQuestionListItem();

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it('removeSecurityQuestionListItem should dispatch SECURITY_QUESTIONS_LIST_REMOVE action', () => {
    const expectedAction = {
      type: SecurityQuestionsActions.SECURITY_QUESTIONS_LIST_REMOVE,
      payload: {
        index: 99
      }
    };

    spyOn(store, 'dispatch');
    actions.removeSecurityQuestionListItem(99);

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it('securityQuestionListSelect should dispatch SECURITY_QUESTIONS_LIST_SELECT action', () => {
    const expectedAction = {
      type: SecurityQuestionsActions.SECURITY_QUESTIONS_LIST_SELECT,
      payload: {
        listItemIndex: 3,
        selectedQuestionId: 'id'
      }
    };

    spyOn(store, 'dispatch');
    actions.securityQuestionListSelect(3, 'id');

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it('securityQuestionListSetAnswer should dispatch SECURITY_QUESTIONS_LIST_SET_ANSWER action', () => {
    const expectedAction = {
      type: SecurityQuestionsActions.SECURITY_QUESTIONS_LIST_SET_ANSWER,
      payload: {
        listItemIndex: 4,
        answer: 'the answer'
      }
    };

    spyOn(store, 'dispatch');
    actions.securityQuestionListSetAnswer(4, 'the answer');

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it('retrieveSecurityQuestions should dispatch SECURITY_QUESTIONS_RETRIEVE action', () => {
    const expectedAction = {
      type: SecurityQuestionsActions.SECURITY_QUESTIONS_RETRIEVE
    };

    spyOn(store, 'dispatch');
    actions.retrieveSecurityQuestions();

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
  });

});

