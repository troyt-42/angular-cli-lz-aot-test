import {Component} from '@angular/core';
import {Observable} from 'rxjs';

import {Colors, Authentication} from '../../../../../../models';
import {AppStateService} from '../../../../../../services/appStateService/appState.service';

@Component({
  selector: 'password-container',
  templateUrl: './password-container.component.html',
  styleUrls: ['./password-container.component.scss']
})
export class PasswordContainerComponent {

  private colors$: Observable<Colors>;
  private authentication$: Observable<Authentication>;

  constructor(appStateService: AppStateService) {
    this.colors$ = appStateService.getColors();
    this.authentication$ = appStateService.getAuthentication();
  }

}