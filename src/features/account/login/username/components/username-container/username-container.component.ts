import {Component} from '@angular/core';
import {Observable} from 'rxjs';

import {Colors, Authentication} from '../../../../../../models';
import {AppStateService} from '../../../../../../services/appStateService/appState.service';

@Component({
  selector: 'username-container',
  templateUrl: './username-container.component.html',
  styleUrls: ['./username-container.component.scss']
})
export class UsernameContainerComponent {

  private colors$: Observable<Colors>;
  private authentication$: Observable<Authentication>;

  constructor(appStateService: AppStateService) {
    this.colors$ = appStateService.getColors();
    this.authentication$ = appStateService.getAuthentication();
  }

}