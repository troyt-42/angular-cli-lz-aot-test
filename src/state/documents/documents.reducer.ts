import {Action} from '@ngrx/store';

import {updateObject} from '../util';
import {Documents, createDefaultDocuments} from '../../models/documents/documents';
import {DocumentsActions} from './documents.actions';
import {DocumentsView} from '../../models/documents/documentsView';

export const documentsReducer =
    (state: Documents = createDefaultDocuments(), action: Action): Documents => {

  switch (action.type) {
    case DocumentsActions.DOCUMENTS_RETRIEVE:
      return updateObject(state, {
        isLoading: true,
        isReceived: false,
        error: null
      });

    case DocumentsActions.DOCUMENTS_RETRIEVE_SUCCESS:
      return updateObject(state, {
        isLoading: false,
        isReceived: true,
        error: null,
        list: action.payload
      });

    case DocumentsActions.DOCUMENTS_RETRIEVE_ERROR:
      return updateObject(state, {
        isLoading: false,
        isReceived: false,
        error: action.payload
      });

    case DocumentsActions.SET_SORT_PROPERTY:
      return updateObject(state, {
        sortProperty: action.payload
      });

    case DocumentsActions.SET_ROWS_VIEW:
      return updateObject(state, {
        view: DocumentsView.Rows
      });

    case DocumentsActions.SET_GRID_VIEW:
      return updateObject(state, {
        view: DocumentsView.Grid
      });

    case DocumentsActions.SET_RESULTS_PER_PAGE:
      return updateObject(state, {
        resultsPerPage: action.payload
      });

    case DocumentsActions.SET_CURRENT_PAGE:
      return updateObject(state, {
        currentPage: action.payload
      });

    default:
      return state;
  }
};
