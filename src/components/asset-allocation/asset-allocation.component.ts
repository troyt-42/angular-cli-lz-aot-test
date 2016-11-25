import {Component, Input} from '@angular/core';

import {assetAllocationColors} from '../../models/assetAllocation';

@Component({
  selector: 'asset-allocation',
  templateUrl: './asset-allocation.component.html',
  styleUrls: ['./asset-allocation.component.scss']
})
export class AssetAllocationComponent {

  static Types = {
    Doughnut: 'doughnut'
  };

  @Input()
  labels: Array<string>;

  @Input()
  percentages: Array<number>;

  @Input()
  showTooltips: boolean = true;

  @Input()
  showAnimation: boolean = true;

  @Input()
  isResponsive: boolean = true;

  @Input()
  height: string;

  @Input()
  width: string;

  @Input()
  type: string = AssetAllocationComponent.Types.Doughnut;

  chartOptions: any = {};

  colors: Array<any>;

  ngOnInit() {
    this.chartOptions = {
      animation: {
        duration: this.showAnimation ? 1000 : 0
      },
      tooltips: {
        enabled: this.showTooltips
      },
      legend: {
        display: false
      },
      responsive: this.isResponsive
    };

    this.colors = [{
      backgroundColor: assetAllocationColors
    }];
  }

}
