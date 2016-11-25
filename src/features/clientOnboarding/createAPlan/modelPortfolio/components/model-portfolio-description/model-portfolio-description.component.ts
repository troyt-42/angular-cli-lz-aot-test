import {Component, Input} from '@angular/core';

import {ModelPortfolio} from '../../../../../../models/modelPortfolio/modelPortfolio';
import {Colors} from '../../../../../../models/customization/colors';

@Component({
  selector: 'model-portfolio-description',
  templateUrl: './model-portfolio-description.component.html',
  styleUrls: ['./model-portfolio-description.component.scss']
})
export class ModelPortfolioDescriptionComponent {

  @Input()
  private modelPortfolio: ModelPortfolio;

  @Input()
  private colors: Colors;

  @Input()
  private tableColor: string;

}