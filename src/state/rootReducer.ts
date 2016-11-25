import {combineReducers} from '@ngrx/store';
import {routerReducer} from '@ngrx/router-store';
import {compose} from '@ngrx/core/compose';
import {storeLogger} from 'ngrx-store-logger';
import {localStorageSync} from 'ngrx-store-localstorage';

import {authenticationReducer} from './authentication';
import {customizationReducer} from './customization/customization.reducer';
import {documentsReducer} from './documents/documents.reducer';
import {documentTypesReducer} from './documentTypes/documentTypes.reducer';
import {investingGoalsReducer} from './investingGoals/investingGoals.reducer';
import {investingProfileReducer} from './investingProfile/investingProfile.reducer';
import {localizationReducer} from './localization/localization.reducer';
import {modelPortfolioReducer} from './modelPortfolio/modelPortfolio.reducer';
import {passwordPolicyReducer} from './passwordPolicy/passwordPolicy.reducer';
import {profileReducer} from './profile/profile.reducer';
import {questionnaireReducer} from './questionnaire/questionnaire.reducer';
import {registrationReducer} from './registration/registration.reducer';
import {servicePackagesReducer} from './servicePackages/servicePackages.reducer';
import {signUpReducer} from './signUp/signUp.reducer';

const localStorageState = {
  authentication: ['user', 'userToken']
};

export const rootReducerConst = compose(
  storeLogger({
    collapsed: true
  }),
  localStorageSync([localStorageState], true),
  combineReducers
)({
  authentication: authenticationReducer,
  customization: customizationReducer,
  documents: documentsReducer,
  documentTypes: documentTypesReducer,
  investingGoals: investingGoalsReducer,
  investingProfile: investingProfileReducer,
  localization: localizationReducer,
  modelPortfolio: modelPortfolioReducer,
  passwordPolicy: passwordPolicyReducer,
  profile: profileReducer,
  questionnaire: questionnaireReducer,
  registration: registrationReducer,
  router: routerReducer,
  servicePackages: servicePackagesReducer,
  userSignUp: signUpReducer
});

export function rootReducer (state: any, action: any) {
  return rootReducerConst(state, action);
}
