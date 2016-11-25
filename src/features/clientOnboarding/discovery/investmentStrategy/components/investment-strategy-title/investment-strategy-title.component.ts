import {Component} from '@angular/core';

import {InvestingProfile} from '../../../../../../models/investingProfile/investingProfile';
import {Input} from '@angular/core/src/metadata/directives';
import {Colors} from '../../../../../../models/customization/colors';

@Component({
  selector: 'investment-strategy-title',
  templateUrl: './investment-strategy-title.component.html'
})
export class InvestmentStrategyTitleComponent {

  @Input()
  investingProfile: InvestingProfile;

  @Input()
  colors: Colors;

}