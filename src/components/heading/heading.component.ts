import {Component, Input} from '@angular/core';
import {Colors} from '../../models/customization/colors';

@Component({
  selector: 'heading',
  templateUrl: './heading.component.html'
})
export class HeadingComponent {

  @Input()
  colors: Colors;

  @Input()
  center: boolean = false;

  @Input()
  bold: boolean = true;

  @Input()
  bottomMarginClass: string = 'mb3';

  @Input()
  fontSizeClass: string = 'h2';
}
