import {Component, Input} from '@angular/core';

import {InvestingGoal} from '../../../../../../models/investingGoals/investingGoal';
import {Colors} from '../../../../../../models/customization/colors';

@Component({
  selector: 'investing-goal',
  templateUrl: './investing-goal.component.html'
})
export class InvestingGoalComponent {

  @Input('model')
  investingGoal: InvestingGoal;

  @Input()
  isSelected: boolean;

  @Input()
  colors: Colors;

}
