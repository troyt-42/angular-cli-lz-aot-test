import {Action} from '@ngrx/store';

import {updateObject} from '../util';
import {DocumentTypes, createDefaultDocumentTypes} from '../../models/documentTypes/documentTypes';
import {DocumentTypesActions} from './documentTypes.actions';

export const documentTypesReducer =
    (state: DocumentTypes = createDefaultDocumentTypes(), action: Action): DocumentTypes => {

  switch (action.type) {
    case DocumentTypesActions.DOCUMENT_TYPES_RETRIEVE:
      return updateObject(state, {
        isLoading: true,
        isReceived: false,
        error: null
      });

    case DocumentTypesActions.DOCUMENT_TYPES_RETRIEVE_SUCCESS:
      return updateObject(state, {
        isLoading: false,
        isReceived: true,
        error: null,
        list: action.payload
      });

    case DocumentTypesActions.DOCUMENT_TYPES_RETRIEVE_ERROR:
      return updateObject(state, {
        isLoading: false,
        isReceived: false,
        error: action.payload
      });

    case DocumentTypesActions.SET_DOCUMENT_TYPE:
      return updateObject(state, {
        selectedCode: action.payload
      });

    case DocumentTypesActions.UNSET_DOCUMENT_TYPE:
      return updateObject(state, {
        selectedCode: null
      });

    default:
      return state;
  }
};
