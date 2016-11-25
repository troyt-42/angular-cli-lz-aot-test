import {Component, Input} from '@angular/core';

import {Colors} from '../../models/customization/colors';

@Component({
  selector: 'univeris-footer',
  templateUrl: './univeris-footer.component.html',
  styleUrls: ['./univeris-footer.component.scss']
})
export class UniverisFooter {

  @Input()
  colors: Colors;

}