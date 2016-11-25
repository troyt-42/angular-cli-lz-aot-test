import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

import {ClientOnboardingStateService} from './clientOnboardingState.service';

@Injectable()
export class InvestingGoalsGuard implements CanActivate {

  constructor(private clientOnboardingStateService: ClientOnboardingStateService) {

  }

  canActivate() {
    return this.clientOnboardingStateService.isInvestingGoalSelected();
  }

}