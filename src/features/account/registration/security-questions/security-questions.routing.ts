import {Routes} from '@angular/router';

import {SecurityQuestionsContainerComponent} from
'./components/security-questions-container/security-questions-container.component';
import {HasBasicInfoGuardService} from '../../services';

export const securityQuestionsRoutes: Routes = [
  {
    path: 'securityQuestions',
    component: SecurityQuestionsContainerComponent,
    canActivate: [HasBasicInfoGuardService]
  }
];
