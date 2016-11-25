import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {Colors} from '../../../../../../models/customization/colors';

@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.html',
  styleUrls: ['./forgot-password.scss']
})
export class ForgotPasswordComponent {

  @Input() colors: Colors;

  private forgotPasswordForm: FormGroup;
  private username: FormControl;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.username = new FormControl('', Validators.required);

    this.forgotPasswordForm = this.formBuilder.group({
      'username': this.username,
    });
  }

  submit() {
    // TODO add submit action
    // this.authActions.setUsername(this.username.value, this.remember.value);
    // this.router.navigate(['account', 'login', 'password']);
  }
}
