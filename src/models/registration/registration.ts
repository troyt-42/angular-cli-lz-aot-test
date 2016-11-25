import {SecurityQuestions, createDefaultSecurityQuestions} from './securityQuestions';
import {Verification, createDefaultVerification} from './verification';
import {Activation, createDefaultActivation} from './activation';

import {SignUpInfo} from '../userSignUp';

export interface Registration {
  readonly verification: Verification;
  readonly securityQuestions: SecurityQuestions;
  readonly activation: Activation;
  readonly basicInfo: SignUpInfo;
}

export function createDefaultRegistration(): Registration {
  return {
    verification: createDefaultVerification(),
    securityQuestions: createDefaultSecurityQuestions(),
    activation: createDefaultActivation(),
    basicInfo: null
  };
}
