import {Component, Input, Output, EventEmitter} from '@angular/core';

import {Question} from '../../../../../../models/questionnaire/question';
import {QuestionTypes} from '../../../../../../models/questionnaire/questionTypes';
import {AnsweredQuestion} from '../../../../../../models/profile/answeredQuestion';
import {AnswerOption} from '../../../../../../models/questionnaire/answerOption';
import {Colors} from '../../../../../../models/customization/colors';

@Component({
  selector: 'question',
  templateUrl: './question.component.html'
})
export class QuestionComponent {

  @Input('model')
  question: Question;

  @Input()
  answer: AnsweredQuestion;

  @Input()
  colors: Colors;

  @Output()
  answerChanged = new EventEmitter();

  answeredOptions: Array<AnswerOption>;
  answeredValue: number;

  ngOnChanges() {
    this.answeredOptions = this.getAnsweredOptions();
    this.answeredValue = this.getAnsweredValue();
  }

  private getAnsweredOptions() {
    return this.answer ? this.answer.answeredOptions : [];
  }

  private getAnsweredValue() {
    return this.answer ? this.answer.value : null;
  }

  isSelectableUsingButtons() {
    return !this.isSliderInput();
  }

  isSliderInput() {
    return this.question.type === QuestionTypes.INPUT;
  }

  isCheckboxInput() {
    return this.question.type === QuestionTypes.CHECKBOX;
  }

  onAnswerChanged(event) {
    this.answerChanged.emit(event);
  }

}
