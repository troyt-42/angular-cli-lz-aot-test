import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {CommonComponentsModule} from '../../../components/commonComponents.module';
import {CommonPipesModule} from '../../../pipes/commonPipes.module';
import {LocaleModule} from '../../../components/locale/locale.module';
import {NavigatorModule} from '../../../components/navigator/navigator.module';
import {forgotRoutes} from './forgot.routing';
import {ForgotComponent} from './forgot.component';
import {ForgotUsernameModule} from './forgot-username/forgot-username.module';
import {ForgotPasswordModule} from './forgot-password/forgot-password.module';
import {EmailSentModule} from './email-sent/email-sent.module';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    CommonPipesModule,
    LocaleModule,
    NavigatorModule,
    ReactiveFormsModule,
    ForgotUsernameModule,
    ForgotPasswordModule,
    EmailSentModule,
    RouterModule.forChild(forgotRoutes)
  ],
  declarations: [
    ForgotComponent
  ],
  providers: [
  ]
})
export class ForgotModule {
}
