import {Routes} from '@angular/router';

import {RegistrationComponent} from './registration.component';
import {basicRegistrationRoutes} from './basic/basic.routing';
import {securityQuestionsRoutes} from './security-questions/security-questions.routing';

export const registrationRoutes: Routes = [
  {
    path: 'registration',
    component: RegistrationComponent,
    children: [
      {
        pathMatch: 'full',
        path: '',
        redirectTo: 'basic'
      },
      ...basicRegistrationRoutes,
      ...securityQuestionsRoutes
    ]
  }
];
