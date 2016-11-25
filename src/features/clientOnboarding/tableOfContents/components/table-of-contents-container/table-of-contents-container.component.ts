import {Component} from '@angular/core';
import {Observable} from 'rxjs';

import {AppStateService} from '../../../../../services/appStateService/appState.service';
import {Profile} from '../../../../../models/profile/profile';

@Component({
  templateUrl: './table-of-contents-container.component.html',
  styleUrls: ['./table-of-contents-container.component.scss']
})
export class TableOfContentsContainerComponent {

  private profile$: Observable<Profile>;

  constructor(appStateService: AppStateService) {
    this.profile$ = appStateService.getProfile();
  }

}