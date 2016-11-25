import {Store, Action} from '@ngrx/store';

import {AppState} from '../models/appState';

export class MockStore extends Store<AppState> {

  constructor() {
    super(null, null, null);
  }

  dispatch(action: Action): void {

  }
}