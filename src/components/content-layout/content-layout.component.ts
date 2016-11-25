import {Component, Input} from '@angular/core';

import {Colors} from '../../models/customization/colors';

@Component({
  selector: 'content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent {

  @Input()
  colors: Colors;

  @Input()
  mainPadding: boolean = false;

  @Input()
  hasFooter: boolean = false;

}
