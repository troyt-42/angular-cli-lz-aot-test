import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

import {AppStateService} from '../../../services/appStateService/appState.service';
import {Registration} from '../../../models';

@Injectable()
export class HasBasicInfoGuardService implements CanActivate {

  private registration: Registration;

  constructor(
    appStateService: AppStateService,
    private router: Router
  ) {
    appStateService.getRegistration().subscribe(
      registration => this.registration = registration
    );
  }

  canActivate() {
    let hasBasicInfo = !!this.registration.basicInfo;

    if (!hasBasicInfo) {
      // Can't go to account/registration/basic since that route requires token.
      this.router.navigate(['account']);
    }

    return hasBasicInfo;
  }

}