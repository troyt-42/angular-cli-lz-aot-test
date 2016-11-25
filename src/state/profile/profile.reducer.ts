import {Action} from '@ngrx/store';

import {ProfileActions} from './profile.actions';
import {answeredQuestionnaireReducer} from './answeredQuestionnaire/answeredQuestionnaire.reducer';
import {Profile, createDefaultProfile} from '../../models/profile/profile';
import {updateObject} from '../util';

export const profileReducer =
  (state: Profile = createDefaultProfile(), action: Action): Profile => {

    state = updateObject(state, {
      answeredQuestionnaire: answeredQuestionnaireReducer(state.answeredQuestionnaire, action)
    });

    switch (action.type) {
      case ProfileActions.PROFILE_START:
        return createDefaultProfile();

      case ProfileActions.PROFILE_UPDATE_CLIENT_ONBOARDING_STATE:
        return updateObject(state, {
          clientOnboardingStateId: action.payload
        });

      case ProfileActions.PROFILE_SET_USER_EMAIL_ADDRESS:
        return updateObject(state, {
          userEmailAddress: action.payload
        });

      case ProfileActions.PROFILE_SELECT_INVESTING_GOAL:
        return updateObject(state, {
          selectedInvestingGoal: action.payload
        });

      case ProfileActions.PROFILE_SELECT_INVESTING_PROFILE:
        return updateObject(state, {
          selectedInvestingProfile: action.payload
        });

      case ProfileActions.PROFILE_SELECT_MODEL_PORTFOLIO:
        return updateObject(state, {
          selectedModelPortfolio: action.payload
        });

      case ProfileActions.PROFILE_SELECT_SERVICE_PACKAGE:
        return updateObject(state, {
          selectedServicePackage: action.payload
        });

      default:
        return state;
    }
  };