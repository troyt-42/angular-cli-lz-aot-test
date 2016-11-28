import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormBuilder} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {RouterStoreModule} from '@ngrx/router-store';

// Import all of Observable
import 'rxjs/Rx';

import {routingProviders, routes} from './app.routing';

import {LocaleModule} from '../components/locale/locale.module';
import {CommonComponentsModule} from '../components/commonComponents.module';
import {ClientOnboardingModule} from '../features/clientOnboarding/clientOnboarding.module';
import {LandingModule} from '../features/landing/landing.module';
import {AccountModule} from '../features/account/account.module';

import {ApplicationComponent} from './components';
import {AutoScrollService} from './services';
import {serviceProviders} from '../services';
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
} from '../state';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    StoreModule.provideStore(rootReducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(ActivationEffects),
    EffectsModule.run(AuthenticationEffects),
    EffectsModule.run(CustomizationEffects),
    EffectsModule.run(DocumentsEffects),
    EffectsModule.run(DocumentTypesEffects),
    EffectsModule.run(LocalizationEffects),
    EffectsModule.run(InvestingGoalsEffects),
    EffectsModule.run(InvestingProfileEffects),
    EffectsModule.run(ModelPortfolioEffects),
    EffectsModule.run(PasswordPolicyEffects),
    EffectsModule.run(QuestionnaireEffects),
    EffectsModule.run(SecurityQuestionsEffects),
    EffectsModule.run(ServicePackageEffects),
    EffectsModule.run(SignUpEffects),
    EffectsModule.run(VerificationEffects),
    LocaleModule,
    CommonComponentsModule,
    LandingModule,
    AccountModule,
    ClientOnboardingModule,
  ],
  declarations: [
    ApplicationComponent,
  ],
  bootstrap: [
    ApplicationComponent,
  ],
  providers: [
    FormBuilder,
    AutoScrollService,
    actionProviders,
    serviceProviders,
    routingProviders,
  ]
})
export class ApplicationModule {}
