import {Component, Input} from '@angular/core';

import {Documents, getAllInvestorDocumentFilesByType} from '../../../../../models/documents/documents';
import {Colors} from '../../../../../models/customization/colors';
import {InvestorDocumentFile} from '../../../../../models/documents/investorDocumentFile';

@Component({
  selector: 'documents-listing',
  templateUrl: './documents-listing.component.html',
  styleUrls: ['./documents-listing.component.scss']
})
export class DocumentsListingComponent {

  @Input()
  documents: Documents;

  @Input()
  documentType: string;

  @Input()
  colors: Colors;

  files: Array<InvestorDocumentFile>;

  ngOnChanges() {
    this.files = getAllInvestorDocumentFilesByType(this.documents, this.documentType);
  }

}