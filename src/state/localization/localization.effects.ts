import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';

import {LocaleLoaderService} from '../../services/locale/locale-loader.service';
import {LocalizationActions} from './localization.actions';
import {createAction} from '../actions/createAction';

@Injectable()
export class LocalizationEffects {

  constructor(
    private actions$: Actions,
    private loader: LocaleLoaderService
  ) {

  }

  @Effect()
  retrieve$ = this.actions$
    .ofType(LocalizationActions.LOCALIZATION_RETRIEVE)
    .mergeMap<Action>(action => this.loader.fetch()
      .map(result => createAction(LocalizationActions.LOCALIZATION_RETRIEVE_SUCCESS, {
        locales: result
      }))
      .catch(error => Observable.of(createAction(LocalizationActions.LOCALIZATION_RETRIEVE_ERROR, {
        error
      })))
    );

}
