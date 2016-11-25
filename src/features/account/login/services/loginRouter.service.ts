import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AppStateService} from '../../../../services/appStateService/appState.service';
import {Subscription} from 'rxjs';
import {Authentication} from '../../../../models/authentication/authentication';

@Injectable()
export class LoginRouterService {

  authentication: Authentication;
  subscription: Subscription;

  constructor(
    appStateService: AppStateService,
    private router: Router
  ) {
    this.subscription = appStateService.getAuthentication().subscribe(
      authentication => this.authentication = authentication
    );
  }

  navigateToLogin() {
    this.router.navigate([
      'account',
      'login',
      !!this.authentication.username ? 'password' : 'username'
    ]);
  }

}
