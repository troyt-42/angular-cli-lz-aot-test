import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subscription} from 'rxjs';

import {Questionnaire, getQuestions} from '../../../../../../models/questionnaire/questionnaire';
import {QuestionnaireActions} from '../../../../../../state/questionnaire/questionnaire.actions';
import {QuestionnaireRouterService} from '../../services/questionnaireRouter.service';
import {AppStateService} from '../../../../../../services/appStateService/appState.service';

@Component({
  templateUrl: './questionnaire-resolver.component.html'
})
export class QuestionnaireResolverComponent {

  private questionnaire$: Observable<Questionnaire>;

  private goalCode: string;
  private subscriptions: Array<Subscription> = [];

  constructor(
    appStateService: AppStateService,
    private questionnaireRouterService: QuestionnaireRouterService,
    private route: ActivatedRoute,
    private questionnaireActions: QuestionnaireActions
  ) {
    this.questionnaire$ = appStateService.getQuestionnaire();
  }

  ngOnInit() {
    this.subscriptions.push(
      this.route.params.subscribe((params: any) => {
        this.questionnaireActions.loadQuestionnaire(params.goalCode);

        this.goalCode = params.goalCode;
      })
    );

    this.subscriptions.push(
      this.questionnaire$.subscribe(
        (questionnaire) => {
          if (questionnaire.isReceived) {
            this.questionnaireRouterService.navigateToQuestion(
              this.goalCode,
              getQuestions(questionnaire)[0].id
            );
          }
        }
      )
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
