import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {LocaleModule} from '../../../components/locale/locale.module';
import {CommonComponentsModule} from '../../../components/commonComponents.module';
import {UsernameModule} from './username/username.module';
import {PasswordModule} from './password/password.module';


import {LoginComponent} from './login.component';
import {loginRoutes} from './login.routing';
import {LoginRouterService} from './services';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    LocaleModule,
    UsernameModule,
    PasswordModule,
    RouterModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    LoginRouterService
  ]
})
export class LoginModule { }
