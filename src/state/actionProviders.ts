import {ActivationActions} from './registration/activation/activation.actions';
import {AuthenticationActions} from './authentication/authentication.actions';
import {CustomizationActions} from './customization/customization.actions';
import {DocumentsActions} from './documents/documents.actions';
import {DocumentTypesActions} from './documentTypes/documentTypes.actions';
import {InvestingGoalsActions} from './investingGoals/investingGoals.actions';
import {InvestingProfileActions} from './investingProfile/investingProfile.actions';
import {LocalizationActions} from './localization/localization.actions';
import {ModelPortfolioActions} from './modelPortfolio/modelPortfolio.actions';
import {PasswordPolicyActions} from './passwordPolicy/passwordPolicy.actions';
import {ProfileActions} from './profile/profile.actions';
import {QuestionnaireActions} from './questionnaire/questionnaire.actions';
import {RegistrationActions} from './registration/registration.actions';
import {SecurityQuestionsActions} from './registration/securityQuestions/securityQuestions.actions';
import {ServicePackagesActions} from './servicePackages/servicePackages.actions';
import {SignUpActions} from './signUp/signUp.actions';
import {VerificationActions} from './registration/verification/verification.actions';

export const actionProviders = [
  ActivationActions,
  AuthenticationActions,
  CustomizationActions,
  DocumentsActions,
  DocumentTypesActions,
  InvestingGoalsActions,
  InvestingProfileActions,
  LocalizationActions,
  ModelPortfolioActions,
  PasswordPolicyActions,
  ProfileActions,
  QuestionnaireActions,
  RegistrationActions,
  SecurityQuestionsActions,
  ServicePackagesActions,
  SignUpActions,
  VerificationActions
];
