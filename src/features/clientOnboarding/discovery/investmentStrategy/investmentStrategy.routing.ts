import {Routes} from '@angular/router';

import {InvestmentStrategyContainerComponent} from './components';
import {InvestingGoalsGuard, QuestionnaireGuard} from '../../services';

export const investmentStrategyRoutes: Routes = [
  {
    path: 'investmentStrategy',
    component: InvestmentStrategyContainerComponent,
    canActivate: [InvestingGoalsGuard, QuestionnaireGuard]
  }
];
