import {Component} from '@angular/core';
import {Observable} from 'rxjs';

import {Questionnaire} from '../../../../../../models/questionnaire/questionnaire';
import {AnsweredQuestionnaire} from '../../../../../../models/profile/answeredQuestionnaire';
import {Colors} from '../../../../../../models/customization/colors';
import {AppStateService} from '../../../../../../services/appStateService/appState.service';

@Component({
  templateUrl: './questionnaire-container.component.html',
  styleUrls: ['./questionnaire-container.component.scss']
})
export class QuestionnaireContainerComponent {

  private questionnaire$: Observable<Questionnaire>;
  private answeredQuestionnaire$: Observable<AnsweredQuestionnaire>;
  private colors$: Observable<Colors>;

  constructor(appStateService: AppStateService) {
    this.questionnaire$ = appStateService.getQuestionnaire();
    this.answeredQuestionnaire$ = appStateService.getAnsweredQuestionnaire();
    this.colors$ = appStateService.getColors();
  }

}