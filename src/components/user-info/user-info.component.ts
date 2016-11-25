import {Component, Input} from '@angular/core';
import {User, Colors} from '../../models';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {

  @Input()
  colors: Colors;

  @Input()
  user: User;

}