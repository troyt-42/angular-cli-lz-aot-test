import {Component} from '@angular/core';

import {Colors} from '../../../models/customization/colors';
import {Input} from '@angular/core/src/metadata/directives';

@Component({
  selector: 'password-policy-error-message',
  templateUrl: './password-policy-error-message.component.html',
  styleUrls: ['./password-policy-error-message.component.scss']
})
export class PasswordPolicyErrorMessageComponent {

  @Input()
  private hasError: boolean;

  @Input()
  private colors: Colors;


}