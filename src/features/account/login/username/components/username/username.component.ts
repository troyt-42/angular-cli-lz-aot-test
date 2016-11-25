import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

import {Observable} from 'rxjs';

import {Colors, Authentication} from '../../../../../../models';
import {AppState} from '../../../../../../models/appState';
import {AuthenticationActions} from '../../../../../../state';

@Component({
  selector: 'username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent {

  @Input() colors: Colors;
  @Input() authentication: Authentication;

  private usernameForm: FormGroup;
  private username: FormControl;
  private remember: FormControl;

  constructor(private router: Router, private formBuilder: FormBuilder,
    private authActions: AuthenticationActions) {}

  ngOnInit() {
    this.username = new FormControl('', Validators.required);
    this.remember = new FormControl(false);

    this.usernameForm = this.formBuilder.group({
      'username': this.username,
      'remember': this.remember
    });

    this.username.setValue(this.authentication.username);
    this.remember.setValue(this.authentication.rememberUsername);
  }

  next() {
    this.authActions.setUsername(this.username.value, this.remember.value);
    this.router.navigate(['account', 'login', 'password']);
  }

  navigateToForgotUsername() {
    this.router.navigate(['account', 'forgot', 'forgot-username']);
  }
}
