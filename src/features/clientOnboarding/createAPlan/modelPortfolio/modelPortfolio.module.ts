import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {CommonComponentsModule} from '../../../../components/commonComponents.module';
import {CommonPipesModule} from '../../../../pipes/commonPipes.module';
import {LocaleModule} from '../../../../components/locale/locale.module';

import {
  ModelPortfolioComponent,
  ModelPortfolioContainerComponent,
  ModelPortfolioDescriptionComponent,
  ModelPortfolioFeesComponent,
  ModelPortfolioHistoricalPerformanceComponent,
  ModelPortfolioSelectionComponent
} from './components';

import {ModelPortfolioService} from './services';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    CommonPipesModule,
    LocaleModule,
    RouterModule,
  ],
  declarations: [
    ModelPortfolioComponent,
    ModelPortfolioContainerComponent,
    ModelPortfolioDescriptionComponent,
    ModelPortfolioFeesComponent,
    ModelPortfolioHistoricalPerformanceComponent,
    ModelPortfolioSelectionComponent
  ],
  providers: [
    ModelPortfolioService
  ]
})
export class ModelPortfolioModule {
}
