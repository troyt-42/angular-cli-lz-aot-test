import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

import {ProfileActions} from '../../../../../../state/profile/profile.actions';
import {InvestingProfileSupport} from '../../../../../../models/investingProfile/investingProfileSupport';
import {Colors} from '../../../../../../models/customization/colors';

@Component({
  selector: 'investment-strategy-call-to-action',
  templateUrl: './investment-strategy-call-to-action.component.html'
})
export class InvestmentStrategyCallToActionComponent {

  @Input()
  investingProfile: InvestingProfileSupport;

  @Input()
  colors: Colors;

  constructor(
    private profileActions: ProfileActions,
    private router: Router
  ) {

  }

  selectInvestmentProfile() {
    this.profileActions.selectInvestingProfile(this.investingProfile);
    this.router.navigate(['clientOnboarding', 'discovery', 'signUp']);
  }

}