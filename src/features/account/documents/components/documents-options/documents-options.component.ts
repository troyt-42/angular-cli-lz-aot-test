import {Component, Input} from '@angular/core';

import {Documents} from '../../../../../models/documents/documents';
import {DocumentTypes} from '../../../../../models/documentTypes/documentTypes';
import {Colors} from '../../../../../models/customization/colors';

@Component({
  selector: 'documents-options',
  templateUrl: './documents-options.component.html',
  styleUrls: ['./documents-options.component.scss']
})
export class DocumentsOptionsComponent {

  @Input()
  documents: Documents;

  @Input()
  documentTypes: DocumentTypes;

  @Input()
  colors: Colors;

}