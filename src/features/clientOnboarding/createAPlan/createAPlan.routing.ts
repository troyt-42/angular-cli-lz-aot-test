import {Routes} from '@angular/router';

import {CreateAPlanComponent} from './createAPlan.component';

import {servicePackagesRoutes} from './servicePackages/servicePackages.routing';
import {modelPortfolioRoutes} from './modelPortfolio/modelPortfolio.routing';

export const createAPlanRoutes: Routes = [
  {
    path: 'createAPlan',
    component: CreateAPlanComponent,
    children: [
      {
        pathMatch: 'full',
        path: '',
        redirectTo: 'servicePackages'
      },
      ...servicePackagesRoutes,
      ...modelPortfolioRoutes
    ]
  }
];
