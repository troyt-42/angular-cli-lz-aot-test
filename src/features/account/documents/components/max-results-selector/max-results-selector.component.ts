import {Component, Input} from '@angular/core';

import {DocumentsActions} from '../../../../../state/documents/documents.actions';
import {Colors} from '../../../../../models/customization/colors';
import {Documents} from '../../../../../models/documents/documents';

@Component({
  selector: 'max-results-selector',
  templateUrl: './max-results-selector.component.html',
  styleUrls: ['./max-results-selector.component.scss']
})
export class MaxResultsSelectorComponent {

  static readonly Values: Array<number> = [5, 15];

  @Input()
  documents: Documents;

  @Input()
  colors: Colors;

  MaxResultValues = MaxResultsSelectorComponent.Values;

  constructor(private documentsActions: DocumentsActions) {

  }

  isSelected(resultsPerPage): boolean {
    return this.documents.resultsPerPage === resultsPerPage;
  }

  setResultsPerPage(resultsPerPage: number) {
    if (this.documents.resultsPerPage !== resultsPerPage) {
      this.documentsActions.setResultsPerPage(resultsPerPage);
    }
  }

}