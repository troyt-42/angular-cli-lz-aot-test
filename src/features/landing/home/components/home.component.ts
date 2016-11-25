import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

import {LocaleRepository} from '../../../../models/localization';
import {Colors} from '../../../../models/customization/colors';
import {ProfileActions} from '../../../../state/profile/profile.actions';
// import {LoginRouterService} from '../../../account/login/services';
import {AppStateService} from '../../../../services/appStateService/appState.service';
import {AppPreferencesService} from '../../../../services';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  localeRepository$: Observable<LocaleRepository>;
  colors$: Observable<Colors>;
  private buttonLabelKey: string;

  constructor(
    appStateService: AppStateService,
    private profile: ProfileActions,
    private router: Router,
    // private loginRouter: LoginRouterService,
    private appPreferences: AppPreferencesService
  ) {
    this.localeRepository$ = appStateService.getLocalization();
    this.colors$ = appStateService.getColors();
  }

  ngOnInit() {
    this.buttonLabelKey = this.appPreferences.isDiscoveryEnabled() ? 'buttonLabel' : 'logIn';
  }

  getStarted() {
    if (this.appPreferences.isDiscoveryEnabled()) {
      this.profile.start();
      this.router.navigate(['clientOnboarding']);
    } else {
      // this.loginRouter.navigateToLogin();
      this.router.navigateByUrl('/account/login/');
    }
  }
}
