import {Component, Input} from '@angular/core';

import {Colors} from '../../../../../../models';

@Component({
  selector: 'terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent {
  @Input()
  colors: Colors;

  @Input()
  url: string;
}