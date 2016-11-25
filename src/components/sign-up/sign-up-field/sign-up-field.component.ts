import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {Colors} from '../../../models/customization/colors';

@Component({
  selector: 'sign-up-field',
  templateUrl: './sign-up-field.component.html',
  styleUrls: ['./sign-up-field.component.scss']
})
export class SignUpFieldComponent {

  @Input()
  colors: Colors;

  @Input()
  formGroup: FormGroup;

  @Input()
  placeholder: string;

  @Input()
  labelLocalizationKey: string;

  @Input()
  inputType: string;

  @Input()
  id: string;

  @Input()
  hasPasswordVisibilityButton: boolean = false;

  @Input()
  valid: boolean;

  @Output()
  visibleChanges: EventEmitter<boolean> = new EventEmitter<boolean>();
}
