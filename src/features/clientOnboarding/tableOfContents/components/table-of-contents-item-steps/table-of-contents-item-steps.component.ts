import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs';

import {AppStateService} from '../../../../../services/appStateService/appState.service';
import {Colors} from '../../../../../models/customization';

@Component({
  selector: 'table-of-contents-item-steps',
  templateUrl: './table-of-contents-item-steps.component.html',
  styleUrls: ['./table-of-contents-item-steps.component.scss']
})
export class TableOfContentsItemStepsComponent {

  @Input()
  private steps: Array<any>;

  private colors$: Observable<Colors>;

  constructor(appStateService: AppStateService) {
    this.colors$ = appStateService.getColors();
  }

  hasSteps(): boolean {
    return !!this.steps && this.steps.length > 0;
  }

}