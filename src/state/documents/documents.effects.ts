import {Injectable} from '@angular/core';
import {Action, Store} from '@ngrx/store';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';

import {AppState} from '../../models/appState';
import {createAction} from '../actions/createAction';
import {DocumentsActions} from './documents.actions';
import {IrisService} from '../../services/iris/iris.service';
import {Documents} from '../../models/documents/documents';
import {reloadDocumentsWhen} from '../util';

@Injectable()
export class DocumentsEffects {

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
    .ofType(DocumentsActions.DOCUMENTS_RETRIEVE)
    .mergeMap<Action>(action => this.irisService.getDocuments(action.payload.investorId, action.payload.documents)
      .map(result => createAction(DocumentsActions.DOCUMENTS_RETRIEVE_SUCCESS, result))
      .catch(error => Observable.of(createAction(DocumentsActions.DOCUMENTS_RETRIEVE_ERROR, error)))
    );

  @Effect()
  setSortProperty$ = reloadDocumentsWhen(
    this.actions$.ofType(DocumentsActions.SET_SORT_PROPERTY),
    this.createDocumentsReceivedPayloadFunction()
  );

  @Effect()
  setCurrentPage$ = reloadDocumentsWhen(
    this.actions$.ofType(DocumentsActions.SET_CURRENT_PAGE),
    this.createDocumentsReceivedPayloadFunction()
  );

  @Effect()
  setResultsPerPage$ = reloadDocumentsWhen(
    this.actions$.ofType(DocumentsActions.SET_RESULTS_PER_PAGE),
    this.createDocumentsReceivedPayloadFunction()
  );

  private createDocumentsReceivedPayloadFunction() {
    return () => ({
      investorId: this.investorId,
      documents: this.documents
    });
  }

}
