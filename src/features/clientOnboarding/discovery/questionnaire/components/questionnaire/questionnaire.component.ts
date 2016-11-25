import {Component, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

import {Question} from '../../../../../../models/questionnaire/question';
import {QuestionComponent} from '../question/question.component';
import {AnswerOptionsComponent} from '../answer-options/answer-options.component';
import {SliderQuestionInputComponent} from '../slider-question-input/slider-question-input.component';
import {NamespaceDirective} from '../../../../../../components/locale/namespace/namespace.directive';
import {QuestionnaireRouterService} from '../../services/questionnaireRouter.service';
import {AnsweredQuestionnaire} from '../../../../../../models/profile/answeredQuestionnaire';
import {
  AnsweredQuestionnaireActions
} from '../../../../../../state/profile/answeredQuestionnaire/answeredQuestionnaire.actions';
import {Questionnaire, getQuestions} from '../../../../../../models/questionnaire/questionnaire';
import {AnsweredQuestion} from '../../../../../../models/profile/answeredQuestion';
import {Colors} from '../../../../../../models/customization/colors';

@Component({
  selector: 'questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
  viewProviders: [
    NamespaceDirective,
    QuestionComponent,
    AnswerOptionsComponent,
    SliderQuestionInputComponent
  ]
})
export class QuestionnaireComponent {

  @Input()
  private questionnaire: Questionnaire;

  @Input()
  private answeredQuestionnaire: AnsweredQuestionnaire;

  @Input()
  private colors: Colors;

  subscription: Subscription;

  currentQuestion: Question;
  currentQuestionIndex: number;
  currentAnswer: AnsweredQuestion;
  questions: Array<Question>;
  nextButtonLabel: string = 'next';
  goalCode: string;

  constructor(
    private questionnaireRouterService: QuestionnaireRouterService,
    private route: ActivatedRoute,
    private answeredQuestionnaireActions: AnsweredQuestionnaireActions
  ) {

  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: any) => {
      if (this.questionnaire.questionnaireId && params.questionId) {
        this.answeredQuestionnaireActions.updateCurrentQuestion(
          this.questionnaire.questionnaireId, params.questionId
        );
      }
      this.goalCode = params.goalCode;
    });
  }

  ngOnChanges() {
    this.questions = getQuestions(this.questionnaire);
    this.currentQuestion = this.getCurrentQuestion();
    this.currentQuestionIndex = this.getCurrentQuestionIndex();
    this.currentAnswer = this.getCurrentAnswer();
    this.nextButtonLabel = this.getNextButtonLabel();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getCurrentQuestion(): Question {
    if (this.answeredQuestionnaire.currentQuestionId) {
      const question = this.findQuestionById(
        this.answeredQuestionnaire.currentQuestionId
      );

      if (question) {
        return question;
      }
    }

    return this.hasQuestions() ? this.questions[0] : null;
  }

  private getCurrentQuestionIndex() {
    return this.questions.indexOf(this.currentQuestion);
  }

  private getCurrentAnswer(): AnsweredQuestion {
    return this.answers.find(answer => answer.questionId === this.currentQuestion.id);
  }

  hasQuestions(): boolean {
    return !!this.questions && this.questions.length > 0;
  }

  findQuestionById(questionId: string): Question {
    return this.questions.find(question => question.id === questionId);
  }

  get answers(): Array<AnsweredQuestion> {
    return this.answeredQuestionnaire.answers;
  }

  get previousQuestion() {
    return this.questions[this.currentQuestionIndex - 1];
  }

  get nextQuestion() {
    return this.questions[this.currentQuestionIndex + 1];
  }

  onAnswerChanged(questionAnswer: AnsweredQuestion) {
    this.answeredQuestionnaireActions.updateQuestionnaireAnswers(
      this.updateQuestionAnswerList(questionAnswer)
    );
  }

  private updateQuestionAnswerList(newQuestionAnswer: AnsweredQuestion): Array<AnsweredQuestion> {
    return this.answers.filter(
      questionAnswer => questionAnswer.questionId !== this.currentQuestion.id
    ).concat([newQuestionAnswer]);
  }

  hasPreviousQuestion() {
    return this.currentQuestionIndex > 0;
  }

  goToPreviousQuestion() {
    if (this.hasPreviousQuestion()) {
      this.questionnaireRouterService.navigateToQuestion(
        this.goalCode, this.previousQuestion.id
      );
    } else {
      this.questionnaireRouterService.navigateToInvestingGoals();
    }
  }

  isCurrentQuestionAnswered(): boolean {
    return this.currentAnswer && this.currentAnswer.isAnswered;
  }

  isLastQuestion(): boolean {
    return this.currentQuestionIndex === this.questions.length - 1;
  }

  isFinished() {
    return this.isLastQuestion() &&
      this.isCurrentQuestionAnswered();
  }

  hasNextQuestion() {
    return this.questions &&
      this.currentQuestionIndex < this.questions.length - 1 &&
      this.isCurrentQuestionAnswered() &&
      !this.isFinished();
  }

  goToNextQuestion() {
    if (this.hasNextQuestion()) {
      this.questionnaireRouterService.navigateToQuestion(
        this.goalCode, this.nextQuestion.id
      );
    } else if (this.isFinished()) {
      this.finish();
    }
  }

  private getNextButtonLabel(): string {
    return this.isLastQuestion() ? 'getResults' : 'next';
  }

  finish() {
    this.questionnaireRouterService.navigateToResults();
  }
}
