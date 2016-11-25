import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';

import {CustomizationService} from '../../services/customization/customization.service';
import {CustomizationActions} from './customization.actions';
import {createAction} from '../actions/createAction';

@Injectable()
export class CustomizationEffects {

  constructor(
    private actions$: Actions,
    private service: CustomizationService
  ) {

  }

  @Effect()
  retrieve$ = this.actions$
    .ofType(CustomizationActions.CUSTOMIZATIONS_RETRIEVE)
    .mergeMap<Action>(action => this.service.getCustomizations()
      .map(result => createAction(CustomizationActions.CUSTOMIZATIONS_RETRIEVE_SUCCESS, result))
      .catch(error => Observable.of(createAction(CustomizationActions.CUSTOMIZATIONS_RETRIEVE_ERROR, {
        error
      })))
    );

}
