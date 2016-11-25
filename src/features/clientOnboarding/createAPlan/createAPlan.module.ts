import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {LocaleModule} from '../../../components/locale/locale.module';
import {CommonComponentsModule} from '../../../components/commonComponents.module';
import {ServicePackagesModule} from './servicePackages/servicePackages.module';
import {ModelPortfolioModule} from './modelPortfolio/modelPortfolio.module';

import {CreateAPlanComponent} from './createAPlan.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    LocaleModule,
    ServicePackagesModule,
    ModelPortfolioModule,
    RouterModule
  ],
  declarations: [
    CreateAPlanComponent
  ],
  providers: [
  ]
})
export class CreateAPlanModule { }
