import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {CommonComponentsModule} from '../../../components/commonComponents.module';
import {CommonPipesModule} from '../../../pipes/commonPipes.module';
import {LocaleModule} from '../../../components/locale/locale.module';
import {NavigatorModule} from '../../../components/navigator/navigator.module';

import {InvestingGoalsModule} from './investingGoals/investingGoals.module';
import {QuestionnaireModule} from './questionnaire/questionnaire.module';
import {InvestmentStrategyModule} from './investmentStrategy/investmentStrategy.module';
import {SignUpModule} from './signUp/signUp.module';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    CommonPipesModule,
    NavigatorModule,
    LocaleModule,
    InvestingGoalsModule,
    QuestionnaireModule,
    InvestmentStrategyModule,
    SignUpModule,
    RouterModule
  ],
  declarations: [
  ],
  providers: []
})
export class DiscoveryModule {

}
