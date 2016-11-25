import {Component, Input} from '@angular/core';

import {Documents, isDocumentsViewedAsGrid} from '../../../../../models/documents/documents';
import {DocumentsActions} from '../../../../../state/documents/documents.actions';
import {Colors} from '../../../../../models/customization/colors';

@Component({
  selector: 'documents-view-toggle',
  templateUrl: './documents-view-toggle.component.html',
  styleUrls: ['./documents-view-toggle.component.scss']
})
export class DocumentsViewToggleComponent {

  @Input()
  documents: Documents;

  @Input()
  colors: Colors;

  icon: string;

  constructor(private documentsActions: DocumentsActions) {

  }

  ngOnChanges() {
    this.icon = isDocumentsViewedAsGrid(this.documents) ? 'fa-th-list' : 'fa-th-large';
  }

  toggleView() {
    if (isDocumentsViewedAsGrid(this.documents)) {
      this.documentsActions.setRowsView();
    } else {
      this.documentsActions.setGridView();
    }
  }

}