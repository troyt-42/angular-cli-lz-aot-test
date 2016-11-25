import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs';

import {TableOfContentsItem} from '../../models/tableOfContentsItem';
import {AppStateService} from '../../../../../services/appStateService/appState.service';
import {Colors} from '../../../../../models/customization/colors';

@Component({
  selector: 'table-of-contents-item',
  templateUrl: './table-of-contents-item.component.html',
  styleUrls: ['./table-of-contents-item.component.scss']
})
export class TableOfContentsItemComponent {

  @Input()
  private item: TableOfContentsItem;

  private colors$: Observable<Colors>;

  isFinished: boolean;
  isStarted: boolean;

  constructor(appStateService: AppStateService) {
    this.colors$ = appStateService.getColors();
  }

  ngOnChanges() {
    // TODO: isFinished should check 'every' step is done rather than 'some'
    // This is due to the ability to skip sign up (which will be removed)
    this.isFinished = this.item.steps ? this.item.steps.some(step => step.isDone) : false;
    this.isStarted = this.item.steps ? this.item.steps.some(step => step.isDone) : false;
  }

}