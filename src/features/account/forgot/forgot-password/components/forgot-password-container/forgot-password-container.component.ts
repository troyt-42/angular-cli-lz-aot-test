import {Component} from '@angular/core';
import {Observable} from 'rxjs';

import {AppStateService} from '../../../../../../services/appStateService/appState.service';
import {Colors} from '../../../../../../models/customization/colors';

@Component({
  selector: 'forgot-password-container',
  templateUrl: './forgot-password-container.html',
  styleUrls: ['./forgot-password-container.scss']
})
export class ForgotPasswordContainerComponent {

  private colors$: Observable<Colors>;

  constructor(appStateService: AppStateService) {
    this.colors$ = appStateService.getColors();
  }

}
