import {Actions} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';

import {createAction} from './actions/createAction';
import {DocumentsActions} from './documents/documents.actions';
import {Documents} from '../models/documents/documents';

export function updateObject(object: any, newObjectValues: any): any {
  return Object.assign({}, object, newObjectValues);
}

export function updateItemInArray(array: Array<any>, itemId: string, updateItemCallback: Function) {
  return array.map(item => {
    if (item.id !== itemId) {
      return item;
    }

    return updateItemCallback(item);
  });
}

export function updateItemInArrayByIndex(array: Array<any>, itemIndex: number, updateItemCallback: Function) {
  return array.map((item, index) => {
    if (index !== itemIndex) {
      return item;
    }

    return updateItemCallback(item);
  });
}

export function reloadDocumentsWhen(actions: Actions, getPayload: () => any) {
  return actions.map(() => {
    return createAction(DocumentsActions.DOCUMENTS_RETRIEVE, getPayload());
  });
}
