import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    pathMatch: 'full',
    path: '',
    redirectTo: 'landing'
  },
  // {
  //   path: '**',
  //   redirectTo: 'landing'
  // },
  {
    path: 'landing',
    loadChildren: '../features/landing/landing.module#LandingModule'
  },
  {
    path: 'account',
    loadChildren: '../features/account/account.module#AccountModule'
  },
  {
    path: 'clientOnboarding',
    loadChildren: '../features/clientOnboarding/clientOnboarding.module#ClientOnboardingModule'
  }
];

export const routingProviders: any[] = [];
