import {Routes} from '@angular/router';
import {ForgotComponent} from './forgot.component';
import {forgotUsernameRoutes} from './forgot-username/forgot-username.routing';
import {forgotPasswordRoutes} from './forgot-password/forgot-password.routing';
import {emailSentRoutes} from './email-sent/email-sent.routing';

export const forgotRoutes: Routes = [
  {
    path: 'forgot',
    component: ForgotComponent,
    children: [
      {
        pathMatch: 'full',
        path: '',
        redirectTo: 'forgot-username'
      },
      ...forgotUsernameRoutes,
      ...forgotPasswordRoutes,
      ...emailSentRoutes
    ]
  }
];
