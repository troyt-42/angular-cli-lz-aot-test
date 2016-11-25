import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

import {
  getClientOnboardingStateByUrl
} from '../../../../models/profile/clientOnboardingStates';
import {Colors} from '../../../../models/customization/colors';

@Component({
  selector: 'step-number',
  templateUrl: './step-number.component.html',
  styleUrls: ['./step-number.component.scss']
})
export class StepNumberComponent {

  @Input()
  colors: Colors;

  number: number;

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.number = getClientOnboardingStateByUrl(this.router.url).number;
  }

}