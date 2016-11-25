import {Authentication} from './authentication';
import {Customization} from './customization';
import {Documents} from './documents/documents';
import {DocumentTypes} from './documentTypes/documentTypes';
import {InvestingGoals} from './investingGoals';
import {InvestingProfile} from './investingProfile';
import {LocaleRepository} from './localization';
import {ModelPortfolio} from './modelPortfolio';
import {PasswordPolicy} from './passwordPolicy';
import {Profile} from './profile/profile';
import {Questionnaire} from './questionnaire/questionnaire';
import {Registration} from './registration/registration';
import {ServicePackages} from './servicePackage/servicePackages';
import {UserSignUp} from './userSignUp';

export interface AppState {
  readonly authentication?: Authentication;
  readonly customization?: Customization;
  readonly documents?: Documents;
  readonly documentTypes?: DocumentTypes;
  readonly investingGoals?: InvestingGoals;
  readonly investingProfile?: InvestingProfile;
  readonly localization?: LocaleRepository;
  readonly modelPortfolio?: ModelPortfolio;
  readonly passwordPolicy?: PasswordPolicy;
  readonly profile?: Profile;
  readonly questionnaire?: Questionnaire;
  readonly registration?: Registration;
  readonly router?;
  readonly servicePackages?: ServicePackages;
  readonly userSignUp?: UserSignUp;
}
