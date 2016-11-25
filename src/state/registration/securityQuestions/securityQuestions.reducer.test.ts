import {SecurityQuestionsActions} from './securityQuestions.actions';
import {createAction} from '../../actions/createAction';
import {securityQuestionsReducer} from './securityQuestions.reducer';
import {SecurityQuestions, createDefaultSecurityQuestions} from '../../../models/registration/securityQuestions';
import {updateObject} from '../../util';


describe('Security Questions Reducer', () => {
  let initState: SecurityQuestions;

  it('should set isLoading to true on REGISTRATION_VERIFY', () => {
    const nextState = securityQuestionsReducer(
      initState,
      createAction(SecurityQuestionsActions.SECURITY_QUESTIONS_RETRIEVE)
    );
    expect(nextState.isLoading).toBeTruthy();
    expect(nextState.error).toBeFalsy();
    expect(nextState.isReceived).toBeFalsy();
    expect(nextState.questions.length).toBe(0);
  });

  it('should save the questions list on SECURITY_QUESTIONS_SUCCESS', () => {
    const nextState = securityQuestionsReducer(
      initState,
      createAction(SecurityQuestionsActions.SECURITY_QUESTIONS_SUCCESS, {
        questions: [{
          id: '100',
          question: 'aaa'
        }, {
          id: '101',
          question: 'bbb'
        }]
      })
    );

    expect(nextState.isLoading).toBeFalsy();
    expect(nextState.error).toBeFalsy();
    expect(nextState.isReceived).toBeTruthy();
    expect(nextState.questions.length).toBe(2);
  });

  it('should flag an error on SECURITY_QUESTIONS_ERROR', () => {
    const nextState = securityQuestionsReducer(
      initState,
      createAction(SecurityQuestionsActions.SECURITY_QUESTIONS_ERROR, {
        error: 'error msg'
      })
    );
    expect(nextState.isLoading).toBeFalsy();
    expect(nextState.error).toEqual('error msg');
    expect(nextState.isReceived).toBeFalsy();
    expect(nextState.questions.length).toBe(0);
  });

  describe('Security Question List', () => {
    it('should add the new item', () => {
      const nextState = securityQuestionsReducer(initState,
        createAction(SecurityQuestionsActions.SECURITY_QUESTIONS_LIST_ADD));
      expect(nextState.list.length).toBe(2);
    });

    it('should remove item at index 0', () => {
      let prevState = createDefaultSecurityQuestions();
      let mockList = [{
        selectedQuestionId: '99',
        answer: 'a'
      }, {
        selectedQuestionId: '88',
        answer: 'b'
      }];
      prevState = updateObject(prevState, {
        list: mockList
      });
      const nextState = securityQuestionsReducer(
        prevState,
        createAction(SecurityQuestionsActions.SECURITY_QUESTIONS_LIST_REMOVE, {
          index: 0
        }));
      expect(nextState.list.length).toBe(1);
      expect(nextState.list[0].selectedQuestionId).toBe('88');
    });

    it('should set selectedQuestionId at index 1', () => {
      let prevState = createDefaultSecurityQuestions();
      let mockList = [{
        selectedQuestionId: '99',
        answer: 'a'
      }, {
        selectedQuestionId: '88',
        answer: 'b'
      }];
      prevState = updateObject(prevState, {
        list: mockList
      });
      const nextState = securityQuestionsReducer(
        prevState,
        createAction(SecurityQuestionsActions.SECURITY_QUESTIONS_LIST_SELECT, {
          listItemIndex: 1,
          selectedQuestionId: '77'
        }));
      expect(nextState.list.length).toBe(2);
      expect(nextState.list[0].selectedQuestionId).toBe('99');
      expect(nextState.list[1].selectedQuestionId).toBe('77');
    });

    it('should set answer at index 0', () => {
      let prevState = createDefaultSecurityQuestions();
      let mockList = [{
        selectedQuestionId: '99',
        answer: 'a'
      }, {
        selectedQuestionId: '88',
        answer: 'b'
      }];
      prevState = updateObject(prevState, {
        list: mockList
      });
      const nextState = securityQuestionsReducer(
        prevState,
        createAction(SecurityQuestionsActions.SECURITY_QUESTIONS_LIST_SELECT, {
          listItemIndex: 0,
          answer: 'c'
        }));
      expect(nextState.list.length).toBe(2);
      expect(nextState.list[0].answer).toBe('a');
      expect(nextState.list[1].answer).toBe('b');
    });
  });

});

