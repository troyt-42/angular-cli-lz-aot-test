import {Component, Input} from '@angular/core';

import {Colors} from '../../models/customization/colors';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input()
  colors: Colors;

  @Input()
  isSingle: boolean;

}
