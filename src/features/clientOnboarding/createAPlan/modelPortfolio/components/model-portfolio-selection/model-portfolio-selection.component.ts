import {Component, Input} from '@angular/core';

import {Colors} from '../../../../../../models/customization/colors';
import {ModelPortfolio} from '../../../../../../models/modelPortfolio/modelPortfolio';

@Component({
  selector: 'model-portfolio-selection',
  templateUrl: './model-portfolio-selection.component.html'
})
export class ModelPortfolioSelectionComponent {

  @Input()
  private modelPortfolios: Array<ModelPortfolio>;

  @Input()
  private colors: Colors;

  private hasOneModelPortfolio: boolean;

  ngOnChanges() {
    this.hasOneModelPortfolio = this.modelPortfolios && this.modelPortfolios.length === 1;
  }

}
