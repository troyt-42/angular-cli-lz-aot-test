import {Component, Input, EventEmitter, Output} from '@angular/core';

import {Colors} from '../../models/customization/colors';

@Component({
  selector: 'side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent {

  @Input()
  show: boolean = false;

  @Input()
  colors: Colors;

  @Output()
  showChanges: EventEmitter<boolean> = new EventEmitter<boolean>();

  closeSideNavigation() {
    this.show = false;
    this.showChanges.emit(this.show);
  }

}