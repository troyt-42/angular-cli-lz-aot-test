import {Component} from '@angular/core';

import {InvestingProfile} from '../../../../../../models/investingProfile/investingProfile';
import {Input} from '@angular/core/src/metadata/directives';

@Component({
  selector: 'investment-strategy-description',
  templateUrl: './investment-strategy-description.component.html'
})
export class InvestmentStrategyDescriptionComponent {

  @Input()
  investingProfile: InvestingProfile;

}