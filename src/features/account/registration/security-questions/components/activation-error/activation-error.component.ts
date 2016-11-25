import {Component, Input} from '@angular/core';

import {Colors} from '../../../../../../models';

@Component({
  selector: 'activation-error',
  templateUrl: './activation-error.component.html',
  styleUrls: ['./activation-error.component.scss']
})
export class ActivationErrorComponent {
  @Input()
  colors: Colors;

  @Input()
  error: Error;
}