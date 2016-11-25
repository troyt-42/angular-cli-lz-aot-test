import {Component, Input} from '@angular/core';

import {Fund} from '../../../../../../models/modelPortfolio/fund';
import {Colors} from '../../../../../../models/customization/colors';

@Component({
  selector: 'model-portfolio-fees',
  templateUrl: './model-portfolio-fees.component.html'
})
export class ModelPortfolioFeesComponent {

  @Input()
  private funds: Array<Fund>;

  @Input()
  private tableColor: string;

  private totalFeePercentage: number;

  ngOnChanges() {
    this.totalFeePercentage = this.funds.reduce((totalFeePercentage, fund) => {
      return totalFeePercentage + (fund.invPercent * fund.feePercent) / 100;
    }, 0);
  }

}