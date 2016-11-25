import {Routes} from '@angular/router';

import {DashboardContainerComponent} from './components';
import {IsLoggedInGuardService} from '../services/isLoggedInGuard.service';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardContainerComponent,
    canActivate: [IsLoggedInGuardService]
  }
];