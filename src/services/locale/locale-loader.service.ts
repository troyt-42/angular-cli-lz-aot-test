import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';

import {LocationService} from '../location/location.service';
import {LocalizationActions} from '../../state/localization/localization.actions';
import {Locale} from '../../models/localization';
import {LocaleRepository} from '../../models/localization/localeRepository';
import {AppState} from '../../models/appState';

@Injectable()
export class LocaleLoaderService {

  private localization: LocaleRepository;
  private subscription: Subscription;

  constructor(
    store: Store<AppState>,
    private locationService: LocationService,
    private locationActions: LocalizationActions,
    private http: Http
  ) {
    this.subscription = store.select(appState => appState.localization).subscribe(
      localization => this.localization = localization
    );
  }

  fetch(): Observable<Array<Locale>> {
    return this.http.get(this.locationService.getCustomizationServiceUri('/locale')).map(r => {
      const locales = r.json();

      this.setDefaultLocale(locales);

      return locales;
    });
  }

  private setDefaultLocale(locales: any) {
    if (locales.length > 1 && !this.localization.current) {
      this.locationActions.select(locales[0].isocode);
    }
  }
}
