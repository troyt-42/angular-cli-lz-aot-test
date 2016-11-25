import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {accountRoutes} from './account.routing';
// import {CommonComponentsModule} from '../../components/commonComponents.module';
import {CommonPipesModule} from '../../pipes/commonPipes.module';
import {LocaleModule} from '../../components/locale/locale.module';
import {NavigatorModule} from '../../components/navigator/navigator.module';
import {LoginModule} from './login/login.module';
import {RegistrationModule} from './registration/registration.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {DocumentsModule} from './documents/documents.module';

import {AccountLayoutComponent, AccountLayoutContainerComponent} from './components';
import {IsLoggedInGuardService, IsUsernameSetGuardService, HasBasicInfoGuardService} from './services';
import {ForgotModule} from './forgot/forgot.module';

@NgModule({
  imports: [
    CommonModule,
    // CommonComponentsModule,
    // CommonPipesModule,
    // NavigatorModule,
    // LocaleModule,
    RouterModule.forChild(accountRoutes),
    // LoginModule,
    // RegistrationModule,
    // DashboardModule,
    // DocumentsModule,
    // ForgotModule
  ],
  declarations: [
    AccountLayoutComponent,
    AccountLayoutContainerComponent
  ],
  providers: [
    // IsLoggedInGuardService,
    // IsUsernameSetGuardService,
    // HasBasicInfoGuardService
  ]
})
export class AccountModule {

}
