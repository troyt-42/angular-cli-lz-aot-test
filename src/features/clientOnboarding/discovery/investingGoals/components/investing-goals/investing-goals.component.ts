import {Component, Input} from '@angular/core';

import {InvestingGoalsActions} from '../../../../../../state/investingGoals/investingGoals.actions';
import {ProfileActions} from '../../../../../../state/profile/profile.actions';
import {QuestionnaireRouterService} from '../../../questionnaire/services/questionnaireRouter.service';
import {InvestingGoal} from '../../../../../../models/investingGoals/investingGoal';
import {InvestingGoals} from '../../../../../../models/investingGoals/investingGoals';
import {
  Profile,
  isInvestingGoalSelected,
  hasSelectedInvestingGoal
} from '../../../../../../models/profile/profile';
import {Colors} from '../../../../../../models/customization/colors';

@Component({
  selector: 'investing-goals',
  templateUrl: './investing-goals.component.html',
  styleUrls: ['./investing-goals.component.scss']
})
export class InvestingGoalsComponent {

  @Input()
  private investingGoals: InvestingGoals;

  @Input()
  private profile: Profile;

  @Input()
  private colors: Colors;

  hasSelectedInvestingGoal: boolean;

  constructor(
    private investingGoalsActions: InvestingGoalsActions,
    private profileActions: ProfileActions,
    private router: QuestionnaireRouterService
  ) {

  }

  ngOnInit() {
    this.investingGoalsActions.load();
  }

  ngOnChanges() {
    this.hasSelectedInvestingGoal = hasSelectedInvestingGoal(this.profile);
  }

  private get investingGoalsArray(): Array<InvestingGoal> {
    return this.investingGoals != null ? this.investingGoals.list : [];
  }

  private get failure(): string {
    return this.investingGoals.error ? this.investingGoals.error.message : null;
  }

  private isSelected(investingGoal: InvestingGoal): boolean {
    return isInvestingGoalSelected(this.profile, investingGoal);
  }

  private selectInvestingGoal(investingGoal: InvestingGoal) {
    if (!this.isSelected(investingGoal)) {
      this.profileActions.selectInvestingGoal(investingGoal);
    }
  }

  navigateToQuestionnaire() {
    this.router.navigateToQuestionnaire(this.profile.selectedInvestingGoal.goalCode);
  }
}
