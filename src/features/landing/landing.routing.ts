import {Routes} from '@angular/router';

import {homeRoutes} from './home/home.routing';
import {LandingComponent} from './landing.component';

export const landingRoutes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        pathMatch: 'full',
        path: '',
        redirectTo: 'home'
      },
      ...homeRoutes
    ]
  }
];
