import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {LocationService} from '../../../../../../services/location/location.service';

@Injectable()
export class SignUpService {

  constructor(
    private location: LocationService,
    private http: Http
  ) {

  }

  signUp(email: string, password: string) {
    return this.location.getMockIrisServiceUri('/signup')
      .mergeMap<any>(url => this.http.post(url, {email, password}).map(r => r.json()));
  }

}
