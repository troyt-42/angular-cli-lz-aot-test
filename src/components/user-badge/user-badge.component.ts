import {Component, Input} from '@angular/core';
import {User, Colors} from '../../models';

@Component({
  selector: 'user-badge',
  templateUrl: './user-badge.component.html',
  styleUrls: ['./user-badge.component.scss']
})
export class UserBadgeComponent {

  @Input()
  colors: Colors;

  @Input()
  user: User;

}
