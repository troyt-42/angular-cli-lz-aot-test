import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

import {Profile, hasSelectedInvestingGoal} from '../../../../models/profile/profile';
import {getClientOnboardingStateByUrl} from '../../../../models/profile/clientOnboardingStates';
import {AppStateService} from '../../../../services/appStateService/appState.service';
import {Colors} from '../../../../models/customization/colors';

@Component({
  selector: 'selected-investing-goal',
  templateUrl: './selected-investing-goal.html'
})
export class SelectedInvestingGoalComponent {

  @Input()
  profile: Profile;

  heading: string;
  hasSelectedInvestingGoal: boolean;
  selectedInvestingGoalName: string;

  colors$: Observable<Colors>;

  constructor(
    appStateService: AppStateService,
    private router: Router
  ) {
    this.colors$ = appStateService.getColors();
  }

  ngOnChanges() {
    this.heading = getClientOnboardingStateByUrl(this.router.url).heading;
    this.hasSelectedInvestingGoal = hasSelectedInvestingGoal(this.profile);
    this.selectedInvestingGoalName = hasSelectedInvestingGoal(this.profile) ?
      this.profile.selectedInvestingGoal.name :
      '';
  }

}