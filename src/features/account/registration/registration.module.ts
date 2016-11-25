import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommonComponentsModule} from '../../../components/commonComponents.module';
import {RouterModule} from '@angular/router';

import {LocaleModule} from '../../../components/locale/locale.module';
import {BasicRegistrationModule} from './basic/basic.module';
import {SecurityQuestionsModule} from './security-questions/security-questions.module';

import {RegistrationComponent} from './registration.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    LocaleModule,
    BasicRegistrationModule,
    SecurityQuestionsModule,
    RouterModule
  ],
  declarations: [
    RegistrationComponent
  ],
  providers: [
  ]
})
export class RegistrationModule { }
