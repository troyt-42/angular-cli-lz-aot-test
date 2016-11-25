import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {CommonComponentsModule} from '../../../../components/commonComponents.module';
import {CommonPipesModule} from '../../../../pipes/commonPipes.module';
import {LocaleModule} from '../../../../components/locale/locale.module';
import {NavigatorModule} from '../../../../components/navigator/navigator.module';
import {passwordRoutes} from './password.routing';

import {PasswordComponent, PasswordContainerComponent} from './components';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    CommonPipesModule,
    LocaleModule,
    NavigatorModule,
    ReactiveFormsModule,
    RouterModule.forChild(passwordRoutes)
  ],
  declarations: [
    PasswordComponent,
    PasswordContainerComponent
  ],
  providers: [
  ]
})
export class PasswordModule {
}
