import {Routes} from '@angular/router';

import {usernameRoutes} from './username/username.routing';
import {passwordRoutes} from './password/password.routing';

import {LoginComponent} from './login.component';

export const loginRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    children: [
      {
        pathMatch: 'full',
        path: '',
        redirectTo: 'username'
      },
      ...usernameRoutes,
      ...passwordRoutes
    ]
  }
];
