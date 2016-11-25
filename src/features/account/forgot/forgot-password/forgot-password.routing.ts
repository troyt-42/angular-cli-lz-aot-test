import {Routes} from '@angular/router';
import {ForgotPasswordContainerComponent}
  from './components/forgot-password-container/forgot-password-container.component';

export const forgotPasswordRoutes: Routes = [
  {
    path: 'forgot-password',
    component: ForgotPasswordContainerComponent
  }
];
