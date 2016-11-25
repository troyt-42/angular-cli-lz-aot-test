import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NavigatorModule} from '../../../../components/navigator/navigator.module';
import {LocaleModule} from '../../../../components/locale/locale.module';
import {EmailSentComponent} from './components/email-sent/email-sent.component';
import {EmailSentContainerComponent} from './components/email-sent-container/email-sent-container.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    LocaleModule,
    NavigatorModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    EmailSentComponent,
    EmailSentContainerComponent
  ],
  providers: [
  ]
})
export class EmailSentModule {
}
