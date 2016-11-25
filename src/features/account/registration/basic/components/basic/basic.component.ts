import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

import {Colors, PasswordPolicy, SignUpInfo} from '../../../../../../models';
import {RegistrationActions} from '../../../../../../state';

@Component({
  selector: 'basic-registration',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicRegistrationComponent {
  @Input()
  colors: Colors;

  @Input()
  passwordPolicy: PasswordPolicy;

  constructor(private router: Router,
    private registrationActions: RegistrationActions) {}

  next(info: SignUpInfo) {
    this.registrationActions.setBasicInfo(info);
    this.router.navigate(['account', 'registration', 'securityQuestions']);
  }
}