import {Component, Input, Output, EventEmitter, ChangeDetectorRef} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, FormArray, Validators} from '@angular/forms';
import {SecurityQuestion, Colors, SecurityQuestionListItem,
  getSecurityQuestionById} from '../../../../../../models';

@Component({
  selector: 'security-question-list-item',
  templateUrl: './security-question-list-item.component.html',
  styleUrls: ['./security-question-list-item.component.scss'],
})
export class SecurityQuestionListItemComponent {

  @Input()
  colors: Colors;

  @Input()
  securityQuestions: Array<SecurityQuestion>;

  @Input()
  unselectedSecurityQuestions: Array<SecurityQuestion>;

  @Input()
  canRemoveQuestions: boolean;

  @Input()
  listItem: SecurityQuestionListItem;

  @Input()
  listItemIndex: number;

  @Input()
  formArray: FormArray;

  @Output()
  remove: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  answerChanged: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  selectedSecurityQuestionChanged: EventEmitter<string> = new EventEmitter<string>();

  private securityQuestionForm: FormGroup;
  private answer: FormControl;
  private question: FormControl;
  private answerChangedSubscription;
  private static debounceTime = 500;

  private questionOptions: Array<SecurityQuestion>;

  constructor(private formBuilder: FormBuilder) {
    this.answer = new FormControl({value: '', disabled: true}, [Validators.required]);
    this.question = new FormControl('', [Validators.required]);

    this.securityQuestionForm = this.formBuilder.group({
      'answer': this.answer,
      'question': this.question
    });
  }

  ngOnInit() {
    this.answerChangedSubscription = this.answer.valueChanges
      .debounceTime(SecurityQuestionListItemComponent.debounceTime)
      .distinctUntilChanged()
      .subscribe((value) => this.answerChanged.emit(value));

    this.formArray.insert(this.listItemIndex, this.securityQuestionForm);
  }

  ngOnDestroy() {
    this.answerChangedSubscription.unsubscribe();
    this.formArray.removeAt(this.listItemIndex);
  }

  ngOnChanges() {
    if (this.listItem.selectedQuestionId) {
      this.answer.enable();

      // When a question is selected it needs to be in the drop down list.
      this.questionOptions = [
        getSecurityQuestionById(this.securityQuestions, this.listItem.selectedQuestionId),
        ...this.unselectedSecurityQuestions];
    } else {
      // Show security questions that are not selected by other list items.
      this.questionOptions = this.unselectedSecurityQuestions;
    }
  }

  questionChanged(value: string) {
    this.selectedSecurityQuestionChanged.emit(value);
  }
}
