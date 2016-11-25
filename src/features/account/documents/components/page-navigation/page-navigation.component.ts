import {Component, Input} from '@angular/core';

import {Documents} from '../../../../../models/documents/documents';
import {DocumentsActions} from '../../../../../state/documents/documents.actions';

@Component({
  selector: 'page-navigation',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.scss']
})
export class PageNavigationComponent {

  @Input()
  documents: Documents;

  isPreviousDisabled: boolean;
  isNextDisabled: boolean;

  constructor(private documentsActions: DocumentsActions) {

  }

  ngOnChanges() {
    this.isPreviousDisabled = this.documents.currentPage <= 1;
    this.isNextDisabled = false;
  }

  viewPreviousPage() {
    this.documentsActions.setCurrentPage(this.documents.currentPage - 1);
  }

  viewNextPage() {
    this.documentsActions.setCurrentPage(this.documents.currentPage + 1);
  }

}