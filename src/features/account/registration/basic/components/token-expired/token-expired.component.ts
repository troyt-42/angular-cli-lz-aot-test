import {Component, Input} from '@angular/core';

import {Colors} from '../../../../../../models';

@Component({
  selector: 'token-expired',
  templateUrl: './token-expired.component.html',
  styleUrls: ['./token-expired.component.scss']
})
export class TokenExpiredComponent {
  @Input()
  colors: Colors;
}