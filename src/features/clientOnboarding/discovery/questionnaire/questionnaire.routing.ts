import {Routes} from '@angular/router';

import {
  QuestionnaireContainerComponent,
  QuestionnaireResolverComponent
} from './components';

export const questionnaireRoutes: Routes = [
  {
    path: 'questionnaire/:goalCode',
    children: [
      {
        path: '',
        component: QuestionnaireResolverComponent,
      },
      {
        path: 'question/:questionId',
        component: QuestionnaireContainerComponent
      }
    ]
  }

];
