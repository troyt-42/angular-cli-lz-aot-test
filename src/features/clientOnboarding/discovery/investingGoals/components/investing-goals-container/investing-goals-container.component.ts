import {Component} from '@angular/core';
import {Observable} from 'rxjs';

import {InvestingGoals} from '../../../../../../models/investingGoals/investingGoals';
import {Profile} from '../../../../../../models/profile/profile';
import {Colors} from '../../../../../../models/customization/colors';
import {AppStateService} from '../../../../../../services/appStateService/appState.service';

@Component({
  selector: 'investing-goals-container',
  templateUrl: './investing-goals-container.component.html',
  styleUrls: ['./investing-goals-container.component.scss']
})
export class InvestingGoalsContainerComponent {

  private investingGoals$: Observable<InvestingGoals>;
  private profile$: Observable<Profile>;
  private colors$: Observable<Colors>;

  constructor(appStateService: AppStateService) {
    this.investingGoals$ = appStateService.getInvestingGoals();
    this.profile$ = appStateService.getProfile();
    this.colors$ = appStateService.getColors();
  }

}
