import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

import {Colors} from '../../../../models';
import {Authentication, isLoggedIn} from '../../../../models/authentication/authentication';
import {AuthenticationActions} from '../../../../state/authentication/authentication.actions';

@Component({
  selector: 'account-layout',
  templateUrl: './account-layout.component.html',
  styleUrls: ['./account-layout.component.scss'],
})
export class AccountLayoutComponent {

  @Input()
  authentication: Authentication;

  @Input()
  colors: Colors;

  showNavigation: boolean = false;
  isLoggedIn: boolean = false;

  constructor(
    private authenticationActions: AuthenticationActions,
    private router: Router
  ) {

  }

  ngOnChanges() {
    this.isLoggedIn = isLoggedIn(this.authentication);
  }

  onShowManagementNavigationChanges(showMenu: boolean) {
    this.showNavigation = showMenu;
  }

  hideSideNavigation() {
    this.showNavigation = false;
  }

  logout() {
    this.hideSideNavigation();
    this.authenticationActions.logout();
    this.router.navigate(['account', 'login']);
  }

}
