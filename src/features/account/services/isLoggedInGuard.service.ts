import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

import {AppStateService} from '../../../services/appStateService/appState.service';
import {Authentication, isLoggedIn} from '../../../models/authentication/authentication';

@Injectable()
export class IsLoggedInGuardService implements CanActivate {

  private authentication: Authentication;

  constructor(
    appStateService: AppStateService,
    private router: Router
  ) {
    appStateService.getAuthentication().subscribe(
      authentication => this.authentication = authentication
    );
  }

  canActivate() {
    let result = isLoggedIn(this.authentication);

    if (!result) {
      this.router.navigate(['account', 'login']);
    }

    return result;
  }

}