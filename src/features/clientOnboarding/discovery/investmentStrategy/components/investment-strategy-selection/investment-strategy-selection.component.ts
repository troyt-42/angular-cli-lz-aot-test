import {Component, Input} from '@angular/core';

import {
  InvestingProfile,
  getSelectableInvestingProfiles
} from '../../../../../../models/investingProfile/investingProfile';
import {
  InvestingProfileSupport,
  isPrimaryInvestingProfile
} from '../../../../../../models/investingProfile/investingProfileSupport';
import {hasSelectedInvestingGoal, Profile} from '../../../../../../models/profile/profile';
import {Colors} from '../../../../../../models/customization/colors';

@Component({
  selector: 'investment-strategy-selection',
  templateUrl: './investment-strategy-selection.component.html',
  styleUrls: ['./investment-strategy-selection.component.scss']
})
export class InvestmentStrategySelectionComponent {

  @Input()
  private investingProfile: InvestingProfile;

  @Input()
  private profile: Profile;

  @Input()
  private colors: Colors;

  hasSelectedGoal: boolean;
  selectableInvestingProfiles: Array<InvestingProfileSupport>;
  startPosition: number;

  ngOnChanges() {
    this.hasSelectedGoal = hasSelectedInvestingGoal(this.profile);
    this.selectableInvestingProfiles = getSelectableInvestingProfiles(this.investingProfile);
    this.startPosition = this.getStartPosition();
  }

  private getStartPosition() {
    return this.selectableInvestingProfiles.indexOf(this.getSelectedInvestingProfile());
  }

  private getSelectedInvestingProfile() {
    return this.profile.selectedInvestingProfile ?
      this.selectableInvestingProfiles.find(
        investingProfile => investingProfile.code === this.profile.selectedInvestingProfile.code
      ) :
      this.selectableInvestingProfiles.find(isPrimaryInvestingProfile);
  }

}
