import {Component, Input} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

import {Colors, Authentication, createInvestorIrisCredentials} from '../../../../../../models';
import {AuthenticationActions} from '../../../../../../state';
import {Router} from '@angular/router';

@Component({
  selector: 'password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {

  @Input()
  colors: Colors;

  @Input()
  authentication: Authentication;

  private passwordType = 'password';
  private passwordForm: FormGroup;
  private password: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private authActions: AuthenticationActions,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.password = new FormControl('', Validators.required);
    this.passwordForm = this.formBuilder.group({
      'password': this.password,
    });
  }

  ngOnDestroy() {
    this.clearUsernameIfNeeded();
  }

  login() {
    this.authActions.login(
      createInvestorIrisCredentials(this.authentication.username, this.password.value),
      '/account/documents'
    );
  }

  changePasswordVisibility(isVisible: boolean) {
    this.passwordType = isVisible ? 'text' : 'password';
  }

  private clearUsernameIfNeeded() {
    if (!this.authentication.rememberUsername) {
      this.authActions.setUsername(null);
    }
  }

  navigateToForgotPassword() {
    this.router.navigate(['account', 'forgot', 'forgot-password']);
  }
}
