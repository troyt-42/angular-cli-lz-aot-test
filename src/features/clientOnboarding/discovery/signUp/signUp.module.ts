import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {CommonComponentsModule} from '../../../../components/commonComponents.module';
import {LocaleModule} from '../../../../components/locale/locale.module';

import {SignUpContainerComponent} from './components';
import {SignUpService} from './services';
import {SignUpActions} from '../../../../state/signUp/index';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    CommonComponentsModule,
    LocaleModule,
    RouterModule
  ],
  declarations: [
    SignUpContainerComponent
  ],
  providers: [
    SignUpActions,
    SignUpService
  ]
})
export class SignUpModule {
}
