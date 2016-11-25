import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LocaleModule} from '../../../../components/locale/locale.module';
import {CommonComponentsModule} from '../../../../components/commonComponents.module';
import {CommonPipesModule} from '../../../../pipes/commonPipes.module';
import {RouterModule} from '@angular/router';

import {
  InvestmentStrategyCallToActionComponent,
  InvestmentStrategyComponent,
  InvestmentStrategyContainerComponent,
  InvestmentStrategyDescriptionComponent,
  InvestmentStrategyMapComponent,
  InvestmentStrategyPreambleComponent,
  InvestmentStrategySelectionComponent,
  InvestmentStrategyTitleComponent,
  InvestorInterestComponent,
  RiskComponent
} from './components';

import {
  InvestingProfileActions
} from '../../../../state/investingProfile/investingProfile.actions';

import {InvestmentStrategyService} from './services';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    CommonPipesModule,
    LocaleModule,
    RouterModule
  ],
  declarations: [
    InvestmentStrategyCallToActionComponent,
    InvestmentStrategyComponent,
    InvestmentStrategyContainerComponent,
    InvestmentStrategyDescriptionComponent,
    InvestmentStrategyMapComponent,
    InvestmentStrategyPreambleComponent,
    InvestmentStrategySelectionComponent,
    InvestmentStrategyTitleComponent,
    InvestorInterestComponent,
    RiskComponent
  ],
  providers: [
    InvestingProfileActions,
    InvestmentStrategyService
  ]
})
export class InvestmentStrategyModule { }
