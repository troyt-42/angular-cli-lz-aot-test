import {Component, Input} from '@angular/core';

@Component({
  selector: 'side-navigation-item',
  templateUrl: './side-navigation-item.component.html',
  styleUrls: ['./side-navigation-item.component.scss']
})
export class SideNavigationItemComponent {

  @Input()
  uri: string;

}