import {Component, Input} from '@angular/core';

import {Colors} from '../../../../../models/customization/colors';
import {
  DocumentTypes,
  getSelectedDocumentTypeDescription,
  getTotalNumberOfUnreadFilesBySelectedDocumentType
} from '../../../../../models/documentTypes/documentTypes';

@Component({
  selector: 'selected-document-type',
  templateUrl: './selected-document-type.component.html',
  styleUrls: ['./selected-document-type.component.scss']
})
export class SelectedDocumentTypeComponent {

  @Input()
  documentTypes: DocumentTypes;

  @Input()
  colors: Colors;

  description: string;
  totalNumberOfUnreadFiles: number;

  ngOnChanges() {
    this.description = getSelectedDocumentTypeDescription(this.documentTypes);
    this.totalNumberOfUnreadFiles = getTotalNumberOfUnreadFilesBySelectedDocumentType(this.documentTypes);
  }

}