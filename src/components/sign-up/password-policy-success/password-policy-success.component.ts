import {Component, Input} from '@angular/core';
import {Colors} from '../../../models/customization/colors';

@Component({
  selector: 'password-policy-success',
  templateUrl: './password-policy-success.component.html'
})
export class PasswordPolicySuccessComponent {

  @Input()
  private colors: Colors;

}