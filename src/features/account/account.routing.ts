import {Routes} from '@angular/router';

import {loginRoutes} from './login/login.routing';
import {registrationRoutes} from './registration/registration.routing';
import {dashboardRoutes} from './dashboard/dashboard.routing';
import {documentsRoutes} from './documents/documents.routing';

import {AccountLayoutContainerComponent} from './components';
import {forgotRoutes} from './forgot/forgot.routing';

export const accountRoutes: Routes = [
  {
    path: '',
    component: AccountLayoutContainerComponent,
    children: [
      {
        pathMatch: 'full',
        path: '',
        redirectTo: 'login'
      },
      ...loginRoutes,
      ...registrationRoutes,
      ...dashboardRoutes,
      ...documentsRoutes,
      ...forgotRoutes
    ]
  }
];
