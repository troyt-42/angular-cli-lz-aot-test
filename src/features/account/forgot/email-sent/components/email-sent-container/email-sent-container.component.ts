import {Component} from '@angular/core';
import {Observable} from 'rxjs';

import {Colors} from '../../../../../../models';
import {AppStateService} from '../../../../../../services/appStateService/appState.service';

@Component({
  selector: 'email-sent-container',
  templateUrl: './email-sent-container.component.html',
  styleUrls: ['./email-sent-container.component.scss']
})
export class EmailSentContainerComponent {

  private colors$: Observable<Colors>;

  // TODO retrieve email from API
  private email$: Observable<string> = Observable.of('example@example.com');

  constructor(appStateService: AppStateService) {
    this.colors$ = appStateService.getColors();
  }

}
