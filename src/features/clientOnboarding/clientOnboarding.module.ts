import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {clientOnboardingRoutes} from './clientOnboarding.routing';
import {CommonComponentsModule} from '../../components/commonComponents.module';
import {CommonPipesModule} from '../../pipes/commonPipes.module';
import {LocaleModule} from '../../components/locale/locale.module';
import {NavigatorModule} from '../../components/navigator/navigator.module';
import {TableOfContentsModule} from './tableOfContents/tableOfContents.module';
import {DiscoveryModule} from './discovery/discovery.module';
import {CreateAPlanModule} from './createAPlan/createAPlan.module';

import {
  ClientOnboardingLayoutComponent,
  SelectedInvestingGoalComponent,
  StepNumberComponent
} from './components';

import {
  ClientOnboardingStateService,
  InvestingGoalsGuard,
  QuestionnaireGuard
} from './services';

import {
  actionProviders,
  rootReducer,
  ActivationEffects,
  AuthenticationEffects,
  CustomizationEffects,
  DocumentsEffects,
  DocumentTypesEffects,
  LocalizationEffects,
  InvestingGoalsEffects,
  InvestingProfileEffects,
  ModelPortfolioEffects,
  PasswordPolicyEffects,
  QuestionnaireEffects,
  SecurityQuestionsEffects,
  ServicePackageEffects,
  SignUpEffects,
  VerificationEffects
} from '../../state';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    CommonPipesModule,
    NavigatorModule,
    LocaleModule,
    TableOfContentsModule,
    DiscoveryModule,
    CreateAPlanModule,
    RouterModule.forChild(clientOnboardingRoutes),
    EffectsModule.run(InvestingGoalsEffects),
    EffectsModule.run(ModelPortfolioEffects),
    EffectsModule.run(QuestionnaireEffects),
    EffectsModule.run(ServicePackageEffects),
    EffectsModule.run(SignUpEffects),
  ],
  declarations: [
    ClientOnboardingLayoutComponent,
    SelectedInvestingGoalComponent,
    StepNumberComponent
  ],
  providers: [
    ClientOnboardingStateService,
    InvestingGoalsGuard,
    QuestionnaireGuard
  ]
})
export class ClientOnboardingModule {

}
