import {Component, Input, ChangeDetectorRef} from '@angular/core';
import {FormArray, FormGroup, FormControl} from '@angular/forms';

import {Colors, SecurityQuestionListItem, SecurityQuestion,
  getUnselectedSecurityQuestions} from '../../../../../../models';
import {Registration} from '../../../../../../models/registration/registration';
import {SecurityQuestionsActions, ActivationActions} from '../../../../../../state';
import {CustomValidators} from '../../../../../../util/CustomValidator';

@Component({
  selector: 'security-question-list',
  templateUrl: './security-question-list.component.html',
  styleUrls: ['./security-question-list.component.scss'],
})
export class SecurityQuestionListComponent {

  @Input()
  colors: Colors;

  @Input()
  registration: Registration;

  private static maxListItems = 3;
  private canAddQuestions: boolean;
  private canRemoveQuestions: boolean;
  private listForms: FormArray;
  private listFormGroup: FormGroup;
  private unselectedSecurityQuestions: Array<SecurityQuestion>;

  constructor(private securityQuestionsActions: SecurityQuestionsActions,
    private changeDetectorRef: ChangeDetectorRef,
    private activationActions: ActivationActions) {
    this.listForms = new FormArray([]);
    this.listFormGroup = new FormGroup({
      'listForms': this.listForms
    });
  }

  ngOnChanges() {
    this.canAddQuestions = this.registration.securityQuestions.list.length <
      Math.min(SecurityQuestionListComponent.maxListItems,
      this.registration.securityQuestions.questions.length);
    this.canRemoveQuestions = this.registration.securityQuestions.list.length > 1;

    this.unselectedSecurityQuestions = getUnselectedSecurityQuestions(this.registration.securityQuestions.questions,
      this.registration.securityQuestions.list);

    // Detect validity changes which may have happened in ngOnChanges in list items.
    this.changeDetectorRef.detectChanges();
  }

  addQuestion() {
    this.securityQuestionsActions.addSecurityQuestionListItem();
  }

  removeQuestion(index: number) {
    this.securityQuestionsActions.removeSecurityQuestionListItem(index);
  }

  answerChanged(index: number, answer: string) {
    this.securityQuestionsActions.securityQuestionListSetAnswer(index, answer);
  }

  selectedSecurityQuestionChanged(index: number, securityQuestionId: string) {
    this.securityQuestionsActions.securityQuestionListSelect(index, securityQuestionId);
  }

  submit() {
    this.activationActions.activate('/account/documents');
  }

  trackByItem(index: number, item: SecurityQuestionListItem) {
    return item.id;
  }
}
