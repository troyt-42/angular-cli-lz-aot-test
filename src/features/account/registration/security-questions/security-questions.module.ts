import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {LocaleModule} from '../../../../components/locale/locale.module';
import {CommonComponentsModule} from '../../../../components/commonComponents.module';
import {CommonPipesModule} from '../../../../pipes/commonPipes.module';

import {SecurityQuestionsComponent} from './components/security-questions/security-questions.component';
import {SecurityQuestionsContainerComponent} from
  './components/security-questions-container/security-questions-container.component';

import {SecurityQuestionListItemComponent} from
  './components/security-question-list-item/security-question-list-item.component';
import {SecurityQuestionListComponent} from
  './components/security-question-list/security-question-list.component';
import {ActivationErrorComponent} from './components/activation-error/activation-error.component';
import {TermsAndConditionsComponent} from './components/terms-and-conditions/terms-and-conditions.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    LocaleModule,
    ReactiveFormsModule,
    RouterModule,
    CommonPipesModule
  ],
  declarations: [
    SecurityQuestionsComponent,
    SecurityQuestionsContainerComponent,
    SecurityQuestionListItemComponent,
    SecurityQuestionListComponent,
    ActivationErrorComponent,
    TermsAndConditionsComponent
  ],
  providers: [
  ]
})
export class SecurityQuestionsModule { }
