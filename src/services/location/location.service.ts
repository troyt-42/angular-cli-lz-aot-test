import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {AppState} from '../../models/appState';

const slash = (relative: string): string => {
  if (/^\//.test(relative) === false) {
    return '/';
  }

  return String().valueOf();
};

const getHost = (hostname?: string) => {
  if (hostname) {
    return hostname;
  }

  return `${location.protocol}//${location.host}`;
};

const combine = (relativeUri: string, hostname?: string) => {
  const host = getHost(hostname);
  return `${host}${relativeUri}`;
};

@Injectable()
export class LocationService {

  irisUrl$: Observable<string>;

  constructor(store: Store<AppState>) {
    this.irisUrl$ = store.select(appState => appState.customization.irisServer.url);
  }

  getCustomizationServiceUri = (relative: string) => combine(`/api/v1${slash(relative)}${relative}`);

  getIrisServiceUri = (relative: string): Observable<string> => {
    return this.irisUrl$
      .filter(url => !!url)
      .map(url => combine(`${slash(relative)}${relative}`, url));
  };

  getMockIrisServiceUri = (relative: string): Observable<string> => {
    return Observable.of(combine(`/iris/api/v1${slash(relative)}${relative}`));
  }
}
