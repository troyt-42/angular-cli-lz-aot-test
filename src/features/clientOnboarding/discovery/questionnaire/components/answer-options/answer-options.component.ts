import {Component, Input, EventEmitter, Output} from '@angular/core';

import {AnswerOption} from '../../../../../../models/questionnaire/answerOption';
import {Question} from '../../../../../../models/questionnaire/question';
import {QuestionTypes} from '../../../../../../models/questionnaire/questionTypes';
import {Colors} from '../../../../../../models/customization/colors';

@Component({
  selector: 'answer-options',
  templateUrl: './answer-options.component.html'
})
export class AnswerOptionsComponent {

  @Input()
  question: Question;

  @Input()
  answeredOptions: Array<AnswerOption> = [];

  @Input()
  colors: Colors;

  @Output()
  answerChanged = new EventEmitter();

  isAnswerOptionSelected(answerOption: AnswerOption) {
    return this.answeredOptions.some(answeredOption => answeredOption.id === answerOption.id);
  }

  selectAnswerOption(answerOption: AnswerOption) {
    if (this.isAnswerOptionSelected(answerOption)) {
      this.answeredOptions = this.removeAnswerOption(answerOption);
    } else {
      if (this.question.type === QuestionTypes.CHECKBOX) {
        this.answeredOptions.push(answerOption);
      } else {
        this.answeredOptions = [answerOption];
      }
    }

    this.answerChanged.emit({
      questionId: this.question.id,
      isAnswered: this.isAnswered(),
      answeredOptions: this.answeredOptions
    });
  }

  private isAnswered() {
    return this.answeredOptions.length > 0;
  }

  private removeAnswerOption(answerOption: AnswerOption) {
    return this.answeredOptions.filter(
      answeredOption => answeredOption.id !== answerOption.id
    );
  }

}
