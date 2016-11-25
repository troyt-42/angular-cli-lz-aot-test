import {Component, Input} from '@angular/core';

import {AnswerOption} from '../../../../../../models/questionnaire/answerOption';
import {Colors} from '../../../../../../models/customization/colors';

@Component({
  selector: 'answer-option',
  templateUrl: './answer-option.component.html'
})
export class AnswerOptionComponent {

  @Input()
  isAnswered: boolean;

  @Input('model')
  answerOption: AnswerOption;

  @Input('colors')
  colors: Colors;

}
