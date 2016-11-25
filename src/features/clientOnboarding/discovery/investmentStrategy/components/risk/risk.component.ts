import {Component, Input} from '@angular/core';

import {RiskRule, getRiskColor} from '../../../../../../models/investingProfile/riskRule';
import {Colors} from '../../../../../../models/customization/colors';
import {InvestingProfileSupport} from '../../../../../../models/investingProfile/investingProfileSupport';

@Component({
  selector: 'risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.scss']
})
export class RiskComponent {

  @Input()
  investingProfile: InvestingProfileSupport;

  @Input()
  colors: Colors;

  sortedRisks: Array<RiskRule>;

  getRiskColor = getRiskColor;

  ngOnChanges() {
    this.sortedRisks = this.investingProfile.risks.sort(
      (risk1, risk2) => risk1.code.localeCompare(risk2.code)
    );
  }

}
