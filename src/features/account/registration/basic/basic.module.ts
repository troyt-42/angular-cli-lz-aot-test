import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {LocaleModule} from '../../../../components/locale/locale.module';
import {CommonComponentsModule} from '../../../../components/commonComponents.module';

import {BasicRegistrationComponent} from './components/basic/basic.component';
import {BasicRegistrationContainerComponent} from
  './components/basic-container/basic-container.component';
import {TokenExpiredComponent} from './components/token-expired/token-expired.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    LocaleModule,
    RouterModule
  ],
  declarations: [
    BasicRegistrationComponent,
    BasicRegistrationContainerComponent,
    TokenExpiredComponent
  ],
  providers: [
  ]
})
export class BasicRegistrationModule { }
