import {FormControl} from '@angular/forms';

export class CustomValidators {
  static checkBoxCheckedValidator = function() {
    return (control: FormControl) => control.value ? null : {unchecked: true};
  };
}
