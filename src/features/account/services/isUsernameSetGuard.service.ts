import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

import {AppStateService} from '../../../services/appStateService/appState.service';
import {Authentication} from '../../../models/authentication/authentication';

@Injectable()
export class IsUsernameSetGuardService implements CanActivate {

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
    let isUsernameSet = !!this.authentication.username;

    if (!isUsernameSet) {
      this.router.navigate(['account', 'login']);
    }

    return isUsernameSet;
  }

}