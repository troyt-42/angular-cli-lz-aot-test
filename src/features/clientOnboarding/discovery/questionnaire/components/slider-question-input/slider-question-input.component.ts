import {Component, Input, EventEmitter, Output} from '@angular/core';

import {Question} from '../../../../../../models/questionnaire/question';

@Component({
  selector: 'slider-question-input',
  templateUrl: './slider-question-input.component.html',
  styleUrls: ['./slider-question-input.component.css']
})
export class SliderQuestionInputComponent {
  @Input()
  question: Question;

  @Input()
  value: number;

  @Output()
  answerChanged = new EventEmitter();

  onValueChanged() {
    this.answerChanged.emit({
      questionId: this.question.id,
      isAnswered: true,
      value: this.value
    });
  }

}
