import {Component} from '@angular/core';
import {Observable} from 'rxjs';

import {Colors} from '../../../../../../models';
import {AppStateService} from '../../../../../../services/appStateService/appState.service';

@Component({
  selector: 'forgot-username-container',
  templateUrl: './forgot-username-container.html',
  styleUrls: ['./forgot-username-container.scss']
})
export class ForgotUsernameContainerComponent {

  private colors$: Observable<Colors>;

  constructor(appStateService: AppStateService) {
    this.colors$ = appStateService.getColors();
  }

}
