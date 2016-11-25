import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs';

import {LocationService} from '../location/location.service';
import {Customization} from '../../models/customization';

@Injectable()
export class CustomizationService {
  constructor(
    private location: LocationService,
    private http: Http
  ) {}

  getCustomizations(): Observable<Customization> {
    return this.http.get(this.location.getCustomizationServiceUri('/customizations')).map(r => r.json());
  }
}
