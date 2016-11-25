import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../models/appState';
import {createAction} from '../actions/createAction';

@Injectable()
export class DocumentTypesActions {

  static DOCUMENT_TYPES_RETRIEVE = 'DOCUMENT_TYPES_RETRIEVE';
  static DOCUMENT_TYPES_RETRIEVE_SUCCESS = 'DOCUMENT_TYPES_RETRIEVE_SUCCESS';
  static DOCUMENT_TYPES_RETRIEVE_ERROR = 'DOCUMENT_TYPES_RETRIEVE_ERROR';

  static SET_DOCUMENT_TYPE = 'SET_DOCUMENT_TYPE';
  static UNSET_DOCUMENT_TYPE = 'UNSET_DOCUMENT_TYPE';

  constructor(private store: Store<AppState>) {

  }

  load(investorId: string) {
    this.store.dispatch(createAction(DocumentTypesActions.DOCUMENT_TYPES_RETRIEVE, {
      investorId
    }));
  }

  setDocumentType(documentTypeCode: string) {
    this.store.dispatch(createAction(DocumentTypesActions.SET_DOCUMENT_TYPE, documentTypeCode));
  }

  unsetDocumentType() {
    this.store.dispatch(createAction(DocumentTypesActions.UNSET_DOCUMENT_TYPE));
  }
}
