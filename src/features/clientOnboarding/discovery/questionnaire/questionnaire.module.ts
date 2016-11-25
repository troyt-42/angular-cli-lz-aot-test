import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {CommonComponentsModule} from '../../../../components/commonComponents.module';
import {LocaleModule} from '../../../../components/locale/locale.module';

import {
  AnsweredQuestionnaireActions
} from '../../../../state/profile/answeredQuestionnaire/answeredQuestionnaire.actions';
import {QuestionnaireActions} from '../../../../state/questionnaire/questionnaire.actions';

import {
  QuestionnaireService,
  QuestionnaireRouterService
} from './services';

import {
  AnswerOptionComponent,
  AnswerOptionsComponent,
  QuestionComponent,
  QuestionnaireComponent,
  QuestionnaireContainerComponent,
  QuestionnaireResolverComponent,
  SliderQuestionInputComponent
} from './components';

@NgModule({
  imports: [
    CommonComponentsModule,
    CommonModule,
    FormsModule,
    LocaleModule,
    RouterModule
  ],
  declarations: [
    AnswerOptionComponent,
    AnswerOptionsComponent,
    QuestionComponent,
    QuestionnaireComponent,
    QuestionnaireContainerComponent,
    QuestionnaireResolverComponent,
    SliderQuestionInputComponent
  ],
  providers: [
    AnsweredQuestionnaireActions,
    QuestionnaireActions,
    QuestionnaireService,
    QuestionnaireRouterService
  ]
})
export class QuestionnaireModule { }
