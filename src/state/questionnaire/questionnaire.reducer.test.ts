import {questionnaireReducer} from './questionnaire.reducer';
import {QuestionnaireActions} from './questionnaire.actions';
import {Questionnaire} from '../../models/questionnaire/questionnaire';
import {createAction} from '../actions/createAction';

describe('Questionnaire Reducer', () => {
  let initState: Questionnaire;

  it('should set loading to true on QUESTIONNAIRE_RETRIEVE', () => {
    const nextState = questionnaireReducer(
      initState,
      createAction(QuestionnaireActions.QUESTIONNAIRE_RETRIEVE)
    );

    expect(nextState.isLoading).toBeTruthy();
    expect(nextState.error).toBeFalsy();
    expect(nextState.isReceived).toBeFalsy();
  });

  it('should save question data on QUESTIONNAIRE_RETRIEVE_SUCCESS', () => {
    const nextState = questionnaireReducer(
      initState,
      createAction(QuestionnaireActions.QUESTIONNAIRE_RETRIEVE_SUCCESS, {
        questionnaireId: '123',
        goalCode: 'abc',
        categories: []
      })
    );

    expect(nextState.isLoading).toBeFalsy();
    expect(nextState.error).toBeFalsy();
    expect(nextState.questionnaireId).toEqual('123');
    expect(nextState.goalCode).toEqual('abc');
    expect(nextState.categories).toEqual([]);
  });

  it('should flag an error on QUESTIONNAIRE_RETRIEVE_ERROR', () => {
    const nextState = questionnaireReducer(
      initState,
      createAction(QuestionnaireActions.QUESTIONNAIRE_RETRIEVE_ERROR, 'error msg')
    );

    expect(nextState.isLoading).toBeFalsy();
    expect(nextState.error).toBeTruthy('error msg');
  });
});
