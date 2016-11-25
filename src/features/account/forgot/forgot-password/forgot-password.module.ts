import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {NavigatorModule} from '../../../../components/navigator/navigator.module';
import {LocaleModule} from '../../../../components/locale/locale.module';
import {CommonPipesModule} from '../../../../pipes/commonPipes.module';
import {CommonComponentsModule} from '../../../../components/commonComponents.module';
import {ForgotPasswordContainerComponent  }
  from './components/forgot-password-container/forgot-password-container.component';
import {forgotPasswordRoutes} from './forgot-password.routing';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    CommonPipesModule,
    LocaleModule,
    NavigatorModule,
    ReactiveFormsModule,
    RouterModule.forChild(forgotPasswordRoutes)
  ],
  declarations: [
    ForgotPasswordComponent,
    ForgotPasswordContainerComponent
  ],
  providers: [
  ]
})
export class ForgotPasswordModule {
}
