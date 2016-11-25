import {Component, Input, Output, EventEmitter} from '@angular/core';

import {Colors} from '../../models/customization/colors';

@Component({
  selector: 'hamburger-button',
  templateUrl: './hamburger-button.component.html',
  styleUrls: ['./hamburger-button.component.scss']
})
export class HamburgerButtonComponent {

  @Input()
  showMenu: boolean;

  @Input()
  colors: Colors;

  @Output()
  showMenuChanges: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.showMenuChanges.emit(this.showMenu);
  }

}