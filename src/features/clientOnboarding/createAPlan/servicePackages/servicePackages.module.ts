import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {CommonComponentsModule} from '../../../../components/commonComponents.module';
import {CommonPipesModule} from '../../../../pipes/commonPipes.module';
import {LocaleModule} from '../../../../components/locale/locale.module';

import {
  ServicePackageComponent,
  ServicePackageCallToActionComponent,
  ServicePackagesContainerComponent,
  ServicePackagesSelectionComponent
} from './components';

import {ServicePackageService} from './services';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    CommonPipesModule,
    LocaleModule,
    RouterModule,
  ],
  declarations: [
    ServicePackageComponent,
    ServicePackageCallToActionComponent,
    ServicePackagesContainerComponent,
    ServicePackagesSelectionComponent
  ],
  providers: [
    ServicePackageService
  ]
})
export class ServicePackagesModule {
}
