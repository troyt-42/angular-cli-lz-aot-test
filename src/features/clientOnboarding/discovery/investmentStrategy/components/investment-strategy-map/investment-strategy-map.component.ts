import {Component, Input} from '@angular/core';

import {InvestingProfile} from '../../../../../../models/investingProfile/investingProfile';

@Component({
  selector: 'investment-strategy-map',
  templateUrl: './investment-strategy-map.component.html',
  styleUrls: ['./investment-strategy-map.component.scss']
})
export class InvestmentStrategyMapComponent {

  @Input()
  investingProfile: InvestingProfile;

}