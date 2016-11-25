import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

import {ModelPortfolio} from '../../../../../../models/modelPortfolio/modelPortfolio';
import {Colors} from '../../../../../../models/customization/colors';
import {ProfileActions} from '../../../../../../state/profile/profile.actions';
import {ClientOnboardingStates} from '../../../../../../models/profile/clientOnboardingStates';
import {
  getAssetAllocationClassNames,
  getAssetAllocationPercentages
} from '../../../../../../models/assetAllocation';
import {getSortedAssetAllocations} from '../../../../../../models/assetAllocatable';

const tinycolor = require('tinycolor2');

@Component({
  selector: 'model-portfolio',
  templateUrl: './model-portfolio.component.html',
  styleUrls: ['./model-portfolio.component.scss']
})
export class ModelPortfolioComponent {

  @Input()
  private modelPortfolio: ModelPortfolio;

  @Input()
  private colors: Colors;

  @Input()
  private isSingle: boolean = false;

  assetAllocationLabels: Array<string>;
  assetAllocationPercentages: Array<number>;
  tableColor: string;

  constructor(
    private profileActions: ProfileActions,
    private router: Router
  ) {

  }

  ngOnChanges() {
    const assetAllocations = getSortedAssetAllocations(this.modelPortfolio);

    this.assetAllocationLabels = getAssetAllocationClassNames(assetAllocations);
    this.assetAllocationPercentages = getAssetAllocationPercentages(assetAllocations);

    this.tableColor = tinycolor(this.colors.contentBackground).darken(10);
  }

  continue() {
    this.profileActions.updateClientOnboardingState(ClientOnboardingStates.OpenAnAccount.id);
    this.profileActions.selectModelPortfolio(this.modelPortfolio);

    this.router.navigate(['clientOnboarding', 'tableOfContents']);
  }

}