import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommonComponentsModule} from '../../../../components/commonComponents.module';
import {LocaleModule} from '../../../../components/locale/locale.module';

import {
  InvestingGoalComponent,
  InvestingGoalsComponent,
  InvestingGoalsContainerComponent
} from './components';

import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    LocaleModule,
    RouterModule
  ],
  declarations: [
    InvestingGoalComponent,
    InvestingGoalsComponent,
    InvestingGoalsContainerComponent
  ]
})
export class InvestingGoalsModule { }
