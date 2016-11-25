import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../models/appState';
import {Documents} from '../../models/documents/documents';
import {createAction} from '../actions/createAction';

@Injectable()
export class DocumentsActions {

  static DOCUMENTS_RETRIEVE = 'DOCUMENTS_RETRIEVE';
  static DOCUMENTS_RETRIEVE_SUCCESS = 'DOCUMENTS_RETRIEVE_SUCCESS';
  static DOCUMENTS_RETRIEVE_ERROR = 'DOCUMENTS_RETRIEVE_ERROR';

  static SET_SORT_PROPERTY = 'SET_SORT_PROPERTY';
  static SET_ROWS_VIEW = 'SET_ROWS_VIEW';
  static SET_GRID_VIEW = 'SET_GRID_VIEW';
  static SET_RESULTS_PER_PAGE = 'SET_RESULTS_PER_PAGE';
  static SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

  constructor(private store: Store<AppState>) {

  }

  load(investorId: string, documents: Documents) {
    this.store.dispatch(createAction(DocumentsActions.DOCUMENTS_RETRIEVE, {
      investorId, documents
    }));
  }

  setSortProperty(sortProperty: string) {
    this.store.dispatch(createAction(DocumentsActions.SET_SORT_PROPERTY, sortProperty));
  }

  setRowsView() {
    this.store.dispatch(createAction(DocumentsActions.SET_ROWS_VIEW));
  }

  setGridView() {
    this.store.dispatch(createAction(DocumentsActions.SET_GRID_VIEW));
  }

  setResultsPerPage(resultsPerPage: number) {
    this.store.dispatch(createAction(DocumentsActions.SET_RESULTS_PER_PAGE, resultsPerPage));
  }

  setCurrentPage(currentPage: number) {
    this.store.dispatch(createAction(DocumentsActions.SET_CURRENT_PAGE, currentPage));
  }

}
