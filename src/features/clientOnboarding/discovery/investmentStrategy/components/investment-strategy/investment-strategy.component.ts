import {Component, Input} from '@angular/core';

import {InvestingProfile} from '../../../../../../models/investingProfile/investingProfile';
import {CarouselItemComponent} from '../../../../../../components/carousel/carousel-item.component';
import {Colors} from '../../../../../../models/customization/colors';
import {getSortedAssetAllocations} from '../../../../../../models/assetAllocatable';
import {
  getAssetAllocationClassNames,
  getAssetAllocationPercentages
} from '../../../../../../models/assetAllocation';

@Component({
  selector: 'investment-strategy',
  templateUrl: './investment-strategy.component.html',
  styleUrls: ['./investment-strategy.component.scss']
})
export class InvestmentStrategyComponent extends CarouselItemComponent {

  @Input()
  private investingProfile: InvestingProfile;

  @Input()
  colors: Colors;

  assetAllocationLabels: Array<string>;
  assetAllocationPercentages: Array<number>;

  ngOnChanges() {
    const assetAllocations = getSortedAssetAllocations(this.investingProfile);

    this.assetAllocationLabels = getAssetAllocationClassNames(assetAllocations);
    this.assetAllocationPercentages = getAssetAllocationPercentages(assetAllocations);
  }

}