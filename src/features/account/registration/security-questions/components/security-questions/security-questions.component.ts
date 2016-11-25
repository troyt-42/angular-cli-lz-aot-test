import {Component, Input} from '@angular/core';

import {Colors} from '../../../../../../models';
import {Registration} from '../../../../../../models/registration/registration';

@Component({
  selector: 'security-questions',
  templateUrl: './security-questions.component.html',
  styleUrls: ['./security-questions.component.scss']
})
export class SecurityQuestionsComponent {

  @Input()
  registration: Registration;

  @Input()
  colors: Colors;

}
