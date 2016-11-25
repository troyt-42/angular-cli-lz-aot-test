import {Component, Input} from '@angular/core';

import {Colors} from '../../models/customization/colors';

const tinycolor = require('tinycolor2');

@Component({
  selector: 'selection-button',
  templateUrl: './selection-button.component.html',
  styleUrls: ['./selection-button.component.scss']
})
export class SelectionButtonComponent {

  @Input()
  isSelected: boolean = false;

  @Input()
  colors: Colors;

  theme: any = {};

  ngOnChanges() {
    this.setColors();
  }

  setColors() {
    if (this.isSelected) {
      this.theme.backgroundColor = this.colors.accent;
      this.theme.color = this.colors.accentText;
    } else {
      this.theme.backgroundColor = tinycolor(this.colors.contentBackground).darken(7);
      this.theme.color = this.colors.contentText;
    }
  }

  setHoverColors() {
    if (this.isSelected) {
      this.theme.backgroundColor = tinycolor(this.colors.accent).lighten(5);
      this.theme.color = this.colors.accentText;
    } else {
      this.theme.backgroundColor = tinycolor.mix(
        this.colors.accent, this.colors.contentBackground, 70
      );
      this.theme.color = tinycolor.mix(
        this.colors.accentText, this.colors.contentText, 90
      );
    }
  }

}
