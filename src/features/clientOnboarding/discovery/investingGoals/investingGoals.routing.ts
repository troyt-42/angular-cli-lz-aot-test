import {Routes} from '@angular/router';

import {
  InvestingGoalsContainerComponent
} from './components/investing-goals-container';

export const investingGoalsRoutes: Routes = [
  {
    path: 'investingGoals',
    component: InvestingGoalsContainerComponent
  }
];
