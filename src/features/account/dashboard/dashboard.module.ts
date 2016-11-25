import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {CommonComponentsModule} from '../../../components/commonComponents.module';
import {CommonPipesModule} from '../../../pipes/commonPipes.module';
import {LocaleModule} from '../../../components/locale/locale.module';
import {NavigatorModule} from '../../../components/navigator/navigator.module';

import {DashboardContainerComponent} from './components';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    CommonPipesModule,
    NavigatorModule,
    LocaleModule,
    RouterModule
  ],
  declarations: [
    DashboardContainerComponent
  ],
  providers: []
})
export class DashboardModule {

}
