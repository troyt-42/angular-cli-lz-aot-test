import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

import {ClientOnboardingStateService} from './clientOnboardingState.service';

@Injectable()
export class QuestionnaireGuard implements CanActivate {

  constructor(private clientOnboardingStateService: ClientOnboardingStateService) {

  }

  canActivate() {
    return this.clientOnboardingStateService.isQuestionnaireAnswered();
  }

}