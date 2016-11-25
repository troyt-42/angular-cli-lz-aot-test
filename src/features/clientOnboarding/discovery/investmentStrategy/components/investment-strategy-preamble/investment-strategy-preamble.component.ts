import {Component, Input} from '@angular/core';

import {
  InvestingProfileSupport,
  isPrimaryInvestingProfile
} from '../../../../../../models/investingProfile/investingProfileSupport';
import {Colors} from '../../../../../../models/customization/colors';

const tinycolor = require('tinycolor2');

@Component({
  selector: 'investment-strategy-preamble',
  templateUrl: './investment-strategy-preamble.component.html'
})
export class InvestmentStrategyPreambleComponent {

  @Input()
  private investingProfile: InvestingProfileSupport;

  @Input()
  private colors: Colors;

  isPrimaryProfile: boolean;
  color: string;
  backgroundColor: string;

  ngOnChanges() {
    this.isPrimaryProfile = isPrimaryInvestingProfile(this.investingProfile);
    this.color = this.getColor();
    this.backgroundColor = this.getBackgroundColor();
  }

  private getBackgroundColor() {
    return this.isPrimaryProfile ?
      this.colors.primary :
      tinycolor.mix(this.colors.primary, this.colors.contentBackground, 85);
  }

  private getColor() {
    return this.isPrimaryProfile ? this.colors.primaryText : this.colors.primary;
  }

}