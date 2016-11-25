import {Component, Input} from '@angular/core';

import {AssetAllocatable, getSortedAssetAllocationsWithColors} from '../../models/assetAllocatable';
import {AssetAllocationWithColor} from '../../models/assetAllocation';

@Component({
  selector: 'asset-allocation-legend',
  templateUrl: './asset-allocation-legend.component.html',
  styleUrls: ['./asset-allocation-legend.component.scss']
})
export class AssetAllocationLegendComponent {

  @Input()
  assetAllocatable: AssetAllocatable;

  @Input()
  bottomMarginClass: string = 'mb2';

  assetAllocations: Array<AssetAllocationWithColor>;

  ngOnChanges() {
    this.assetAllocations = getSortedAssetAllocationsWithColors(this.assetAllocatable);
  }

}
