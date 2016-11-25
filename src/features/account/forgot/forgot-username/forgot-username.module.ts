import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {ForgotUsernameContainerComponent} from
  './components/forgot-username-container/forgot-username-container.component';
import {ForgotUsernameComponent} from './components/forgot-username/forgot-username.component';
import {forgotUsernameRoutes} from './forgot-username.routing';
import {NavigatorModule} from '../../../../components/navigator/navigator.module';
import {LocaleModule} from '../../../../components/locale/locale.module';
import {CommonPipesModule} from '../../../../pipes/commonPipes.module';
import {CommonComponentsModule} from '../../../../components/commonComponents.module';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    CommonPipesModule,
    LocaleModule,
    NavigatorModule,
    ReactiveFormsModule,
    RouterModule.forChild(forgotUsernameRoutes)
  ],
  declarations: [
    ForgotUsernameContainerComponent,
    ForgotUsernameComponent
  ],
  providers: [
  ]
})
export class ForgotUsernameModule {
}
