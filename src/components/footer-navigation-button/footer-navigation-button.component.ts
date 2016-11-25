import {Component, Input} from '@angular/core';

import {Colors} from '../../models/customization/colors';

@Component({
  selector: 'footer-navigation-button',
  templateUrl: './footer-navigation-button.component.html',
  styleUrls: ['./footer-navigation-button.component.scss']
})
export class FooterNavigationButtonComponent {

  @Input()
  colors: Colors;

  @Input()
  disabled: boolean = false;

  theme: any = {};

  ngOnChanges() {
    this.setColors();
  }

  setColors() {
    this.theme.color = this.colors.contentText;
  }

  setHoverColors() {
    this.theme.color = this.colors.primary;
  }

}
