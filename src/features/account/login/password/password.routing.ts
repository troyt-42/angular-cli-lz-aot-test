import {Routes} from '@angular/router';

import {PasswordContainerComponent} from './components/password-container';
import {IsUsernameSetGuardService} from '../../services/isUsernameSetGuard.service';

export const passwordRoutes: Routes = [
  {
    path: 'password',
    component: PasswordContainerComponent,
    canActivate: [IsUsernameSetGuardService]
  }
];
