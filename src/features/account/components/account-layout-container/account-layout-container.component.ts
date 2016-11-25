import {Component} from '@angular/core';
import {Observable} from 'rxjs';

import {AppStateService} from '../../../../services/appStateService/appState.service';
import {Authentication} from '../../../../models/authentication/authentication';
import {Colors} from '../../../../models/customization/colors';

@Component({
  selector: 'account-layout-container',
  templateUrl: './account-layout-container.component.html'
})
export class AccountLayoutContainerComponent {

  private authentication$: Observable<Authentication>;
  private colors$: Observable<Colors>;

  constructor(appStateService: AppStateService) {
    this.authentication$ = appStateService.getAuthentication();
    this.colors$ = appStateService.getColors();
  }

}