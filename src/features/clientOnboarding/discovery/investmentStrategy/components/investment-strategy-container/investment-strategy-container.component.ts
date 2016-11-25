import {Component} from '@angular/core';
import {Observable} from 'rxjs';

import {InvestingProfileActions} from '../../../../../../state/investingProfile/investingProfile.actions';
import {InvestingProfile} from '../../../../../../models/investingProfile/investingProfile';
import {Profile} from '../../../../../../models/profile/profile';
import {Colors} from '../../../../../../models/customization/colors';
import {AppStateService} from '../../../../../../services/appStateService/appState.service';

@Component({
  templateUrl: './investment-strategy-container.component.html'
})
export class InvestmentStrategyContainerComponent {

  private investingProfile$: Observable<InvestingProfile>;
  private profile$: Observable<Profile>;
  private colors$: Observable<Colors>;

  constructor(
    appStateService: AppStateService,
    private investingProfileActions: InvestingProfileActions
  ) {
    this.investingProfile$ = appStateService.getInvestingProfile();
    this.profile$ = appStateService.getProfile();
    this.colors$ = appStateService.getColors();

    this.investingProfileActions.loadInvestingProfile('B');
  }

}
