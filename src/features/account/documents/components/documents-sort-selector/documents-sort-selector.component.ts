import {Component, Input} from '@angular/core';

import {Documents} from '../../../../../models/documents/documents';
import {DocumentsSortProperties} from '../../../../../models/documents/documentsSortProperties';
import {DocumentsActions} from '../../../../../state/documents/documents.actions';
import {Colors} from '../../../../../models/customization/colors';

@Component({
  selector: 'documents-sort-selector',
  templateUrl: './documents-sort-selector.component.html',
  styleUrls: ['./documents-sort-selector.component.scss']
})
export class DocumentsSortSelectorComponent {

  @Input()
  documents: Documents;

  @Input()
  colors: Colors;

  showSorts: boolean = false;
  sortPropertyKeys: Array<string>;

  constructor(private documentsActions: DocumentsActions) {

  }

  ngOnChanges() {
    this.sortPropertyKeys = Object.keys(DocumentsSortProperties);
  }

  getSortPropertyByKey(key: string) {
    return DocumentsSortProperties[key];
  }

  isSortPropertyKeySelected(sortPropertyKey: string) {
    return this.documents.sortProperty === this.getSortPropertyByKey(sortPropertyKey);
  }

  setSortPropertyKey(sortPropertyKey: string) {
    const sortProperty = this.getSortPropertyByKey(sortPropertyKey);

    if (this.documents.sortProperty !== sortProperty) {
      this.documentsActions.setSortProperty(sortProperty);
    }

    this.showSorts = false;
  }

  toggleShowSorts() {
    this.showSorts = !this.showSorts;
  }

}