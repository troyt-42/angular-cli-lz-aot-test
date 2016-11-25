import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

import {Profile} from '../../../../models/profile/profile';
import {Colors} from '../../../../models/customization/colors';
import {AppStateService} from '../../../../services/appStateService/appState.service';

@Component({
  selector: 'client-onboarding-layout',
  templateUrl: './client-onboarding-layout.component.html',
  styleUrls: ['./client-onboarding-layout.component.scss']
})
export class ClientOnboardingLayoutComponent {

  static readonly TableOfContents = '/clientOnboarding/tableOfContents';

  private profile$: Observable<Profile>;
  private colors$: Observable<Colors>;
  private contentBackgroundColor$: Observable<string>;

  constructor(
    appStateService: AppStateService,
    private router: Router
  ) {
    this.profile$ = appStateService.getProfile();
    this.colors$ = appStateService.getColors();
    this.contentBackgroundColor$ = appStateService.select(
      appState => appState.customization.colors.contentBackground
    );
  }

  isTableOfContents() {
    return this.router.url === ClientOnboardingLayoutComponent.TableOfContents;
  }

}
