import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

import {Observable} from 'rxjs';

import {Colors, Authentication} from '../../../../../../models';
import {AppState} from '../../../../../../models/appState';
import {AuthenticationActions} from '../../../../../../state';

@Component({
  selector: 'forgot-username',
  templateUrl: './forgot-username.html',
  styleUrls: ['./forgot-username.scss'],
})
export class ForgotUsernameComponent {

  @Input() colors: Colors;

  private forgotUsernameForm: FormGroup;
  private email: FormControl;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    // TODO add email validator
    this.email = new FormControl('', []);

    this.forgotUsernameForm = this.formBuilder.group({
      'email': this.email,
    });
  }

  submit() {
    // TODO add submit action
    // this.authActions.setUsername(this.username.value, this.remember.value);
    // this.router.navigate(['account', 'login', 'password']);
  }
}
