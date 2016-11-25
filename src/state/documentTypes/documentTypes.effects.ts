import {Injectable} from '@angular/core';
import {Action, Store} from '@ngrx/store';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';

import {createAction} from '../actions/createAction';
import {DocumentTypesActions} from './documentTypes.actions';
import {IrisService} from '../../services/iris/iris.service';
import {Documents} from '../../models/documents/documents';
import {AppState} from '../../models/appState';
import {reloadDocumentsWhen} from '../util';

@Injectable()
export class DocumentTypesEffects {

  documents: Documents;
  investorId: string;

  constructor(
    store: Store<AppState>,
    private actions$: Actions,
    private irisService: IrisService
  ) {
    store.select(appState => appState.documents)
      .subscribe(documents => this.documents = documents);

    store.select(appState => appState.authentication.user.contactSysId)
      .subscribe(investorId => this.investorId = investorId);
  }

  @Effect()
  load$ = this.actions$
    .ofType(DocumentTypesActions.DOCUMENT_TYPES_RETRIEVE)
    .mergeMap<Action>(action => this.irisService.getDocumentTypes(action.payload.investorId)
      .map(result => createAction(DocumentTypesActions.DOCUMENT_TYPES_RETRIEVE_SUCCESS, result))
      .catch(error => Observable.of(createAction(DocumentTypesActions.DOCUMENT_TYPES_RETRIEVE_ERROR, error.text())))
    );

  @Effect()
  setDocumentType$ = reloadDocumentsWhen(
    this.actions$.ofType(DocumentTypesActions.SET_DOCUMENT_TYPE),
    this.createDocumentsReceivedPayloadFunction()
  );

  @Effect()
  unsetDocumentType$ = reloadDocumentsWhen(
    this.actions$.ofType(DocumentTypesActions.UNSET_DOCUMENT_TYPE),
    this.createDocumentsReceivedPayloadFunction()
  );

  private createDocumentsReceivedPayloadFunction() {
    return () => ({
      investorId: this.investorId,
      documents: this.documents
    });
  }

}
