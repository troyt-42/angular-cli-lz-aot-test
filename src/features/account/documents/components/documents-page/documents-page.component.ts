import {Component, Input} from '@angular/core';

import {Documents} from '../../../../../models/documents/documents';
import {DocumentsActions} from '../../../../../state/documents/documents.actions';
import {Authentication} from '../../../../../models/authentication/authentication';
import {Colors} from '../../../../../models/customization/colors';
import {DocumentTypes} from '../../../../../models/documentTypes/documentTypes';
import {DocumentTypesActions} from '../../../../../state/documentTypes/documentTypes.actions';

@Component({
  selector: 'documents-page',
  templateUrl: './documents-page.component.html',
  styleUrls: ['./documents-page.component.scss']
})
export class DocumentsPageComponent {

  @Input()
  documents: Documents;

  @Input()
  documentTypes: DocumentTypes;

  @Input()
  authentication: Authentication;

  @Input()
  colors: Colors;

  constructor(
    private documentsActions: DocumentsActions,
    private documentTypesActions: DocumentTypesActions
  ) {

  }

  ngOnInit() {
    this.documentsActions.load(this.authentication.user.contactSysId, this.documents);
    this.documentTypesActions.load(this.authentication.username);
  }

}