import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

import {Colors, SignUpInfo} from '../../../models';
import {isEmailAddressRegExp} from '../../../util/regex';
import {PasswordPolicy} from '../../../models/passwordPolicy/passwordPolicy';

@Component({
  selector: 'sign-up',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.scss']
})
export class SignUpComponent {

  private static MinimumLength = 1;

  @Input()
  passwordPolicy: PasswordPolicy;

  @Input()
  error: Error;

  @Input()
  colors: Colors;

  @Input()
  showUsername: boolean = false;

  @Input()
  submitLocalizationKey: string = 'signUp';

  @Input()
  showSkip: boolean = false;

  @Output()
  skip: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  signUp: EventEmitter<SignUpInfo> = new EventEmitter<SignUpInfo>();

  signUpForm: FormGroup;
  email: FormControl;
  username: FormControl;
  password: FormControl;
  passwordType: string = 'password';
  confirmPassword: FormControl;
  consentForEmailNotification: FormControl;

  constructor(
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern(isEmailAddressRegExp.source)
    ]);

    if (this.showUsername) {
      this.username = new FormControl('', [
        Validators.required
      ]);
    }

    this.password = new FormControl('', [
      this.passwordLengthValidator.bind(this),
      this.passwordLowercaseValidator.bind(this),
      this.passwordUppercaseValidator.bind(this),
      this.passwordNumberOfDigitsValidator.bind(this),
      this.passwordSpecialCharactersValidator.bind(this)
    ]);

    this.confirmPassword = new FormControl('', Validators.required);
    this.consentForEmailNotification = new FormControl(false);

    this.signUpForm = this.formBuilder.group({
      'email': this.email,
      'username': this.username,
      'password': this.password,
      'confirmPassword': this.confirmPassword,
      'consentForEmailNotification': this.consentForEmailNotification
    }, {
      validator: this.confirmPasswordValidator.bind(this)
    });
  }

  changePasswordVisibility(isVisible: boolean) {
    this.passwordType = isVisible ? 'text' : 'password';
  }

  private get length() {
    return Math.max(
      SignUpComponent.MinimumLength, this.passwordPolicy.length || Number.MIN_VALUE
    );
  }

  private get passwordLength() {
    return this.password && this.password.value ? this.password.value.length : 0;
  }

  private passwordLengthValidator() {
    return this.passwordLength >= this.length ? null : {
      passwordLength: false
    };
  }

  private passwordRegexValidator(
    password: FormControl, passwordPolicyProperty, regex: RegExp, errorCode: string
  ) {
    if (this.passwordPolicy[passwordPolicyProperty] && !regex.test(password.value)) {
      const error = {};

      error[errorCode] = false;

      return error;
    }

    return null;
  }

  private passwordLowercaseValidator(password: FormControl) {
    return this.passwordRegexValidator(
      password, 'lowerCase',
      new RegExp(`[a-z]{1,${this.passwordPolicy.lowerCase}}`),
      'passwordLowerCase'
    );
  }

  private passwordUppercaseValidator(password: FormControl) {
    return this.passwordRegexValidator(
      password, 'upperCase',
      new RegExp(`[A-Z]{1,${this.passwordPolicy.upperCase}}`),
      'passwordUpperCase'
    );
  }

  private passwordNumberOfDigitsValidator(password: FormControl) {
    return this.passwordRegexValidator(
      password, 'numberOfDigits',
      new RegExp(`[0-9]{1,${this.passwordPolicy.numberOfDigits}}`),
      'passwordNumberOfDigits'
    );
  }

  private passwordSpecialCharactersValidator(password: FormControl) {
    return this.passwordRegexValidator(
      password, 'specialCharacters',
      new RegExp(
        `[~\`!@#$%^&*()_+=;:'"<>,.?\\/\\|\\-\\[\\]{}\\\\]{1,${this.passwordPolicy.specialCharacters}}`
      ),
      'passwordSpecialCharacter'
    );
  }

  private confirmPasswordValidator() {
    this.confirmPassword.setErrors(
      !this.confirmPassword.value || (this.password.value !== this.confirmPassword.value) ?
        {mismatchedPasswords: true} :
        null
    );

    return null;
  }

  private submit() {
    this.signUp.emit({
      email: this.email.value,
      password: this.password.value,
      username: this.showUsername && this.username.value,
      consentForEmailNotification: this.consentForEmailNotification.value
    });
  }
}
