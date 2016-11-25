import {Component, Input} from '@angular/core';

import {ReturnOnRevenue} from '../../../../../../models/modelPortfolio/returnOnRevenue';
import {Colors} from '../../../../../../models/customization/colors';

@Component({
  selector: 'model-portfolio-historical-performance',
  templateUrl: './model-portfolio-historical-performance.component.html'
})
export class ModelPortfolioHistoricalPerformanceComponent {

  @Input()
  private ror: ReturnOnRevenue;

  @Input()
  private tableColor: string;

}