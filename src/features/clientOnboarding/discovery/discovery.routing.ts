import {Routes} from '@angular/router';

import {investingGoalsRoutes} from './investingGoals/investingGoals.routing';
import {investmentStrategyRoutes} from './investmentStrategy/investmentStrategy.routing';
import {questionnaireRoutes} from './questionnaire/questionnaire.routing';
import {signUpRoutes} from './signUp/signUp.routing';

export const discoveryRoutes: Routes = [
  {
    path: 'discovery',
    children: [
      {
        pathMatch: 'full',
        path: '',
        redirectTo: 'investingGoals'
      },
      ...investingGoalsRoutes,
      ...investmentStrategyRoutes,
      ...questionnaireRoutes,
      ...signUpRoutes
    ]
  }
];