import {Component, Input} from '@angular/core';

import {Colors} from '../../../../../models/customization/colors';

@Component({
  selector: 'document-type-filter-icon',
  templateUrl: './document-type-filter-icon.component.html',
  styleUrls: ['./document-type-filter-icon.component.scss']
})
export class DocumentTypeFilterIconComponent {

  @Input()
  totalNumberOfUnreadDocuments: number;

  @Input()
  colors: Colors;

}