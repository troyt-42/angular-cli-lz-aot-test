import {Routes} from '@angular/router';

import {tableOfContentsRoutes} from './tableOfContents/tableOfContents.routing';
import {discoveryRoutes} from './discovery/discovery.routing';
import {createAPlanRoutes} from './createAPlan/createAPlan.routing';

import {ClientOnboardingLayoutComponent} from './components';

export const clientOnboardingRoutes: Routes = [
  {
    path: '',
    component: ClientOnboardingLayoutComponent,
    children: [
      {
        pathMatch: 'full',
        path: '',
        redirectTo: 'tableOfContents'
      },
      ...tableOfContentsRoutes,
      ...discoveryRoutes,
      ...createAPlanRoutes
    ]
  }
];
