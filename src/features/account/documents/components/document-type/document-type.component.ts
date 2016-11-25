import {Component, Input} from '@angular/core';

import {Colors} from '../../../../../models/customization/colors';

@Component({
  selector: 'document-type',
  templateUrl: './document-type.component.html',
  styleUrls: ['./document-type.component.scss']
})
export class DocumentTypeComponent {

  @Input()
  description: string;

  @Input()
  numberOfUnreadDocuments: number;

  @Input()
  colors: Colors;

}