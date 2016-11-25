import {Observable, Observer} from 'rxjs';

import {LocaleRepository} from '../models';
import {MockStore} from '../test/mockStore';
import {AppStateService} from '../services';

// Utility for testing things that subscribe to app state.
export class MockAppStateService extends AppStateService {
  localizationObserver: Observer<LocaleRepository>;
  localization$: Observable<LocaleRepository>;

  constructor() {
    super(new MockStore());
    this.localization$ = new Observable<LocaleRepository>(observer => this.localizationObserver = observer);
  }

  getLocalization() {
    return this.localization$;
  }

  emitTestLanguage(languageCode: string) {
    this.localizationObserver.next({
      current: languageCode
    });
  }
};
