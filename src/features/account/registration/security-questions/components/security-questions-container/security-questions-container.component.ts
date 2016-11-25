import {Component} from '@angular/core';
import {Observable} from 'rxjs';

import {Colors} from '../../../../../../models';
import {AppStateService} from '../../../../../../services/appStateService/appState.service';
import {Registration} from '../../../../../../models/registration/registration';
import {SecurityQuestionsActions}
  from '../../../../../../state/registration/securityQuestions/securityQuestions.actions';

@Component({
  selector: 'security-questions-container',
  templateUrl: './security-questions-container.component.html',
  styleUrls: ['./security-questions-container.component.scss']
})
export class SecurityQuestionsContainerComponent {

  colors$: Observable<Colors>;
  registration$: Observable<Registration>;

  constructor(
    private appStateService: AppStateService,
    private securityQuestionsActions: SecurityQuestionsActions
  ) {
    this.colors$ = appStateService.getColors();
    this.registration$ = appStateService.getRegistration();
  }

  ngOnInit() {
    this.securityQuestionsActions.retrieveSecurityQuestions();
  }
}
