import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs';
import {IrisService} from '../../../../../services';
import {ServicePackage} from '../../../../../models/servicePackage/servicePackage';

@Injectable()
export class ServicePackageService {
  constructor(
    private iris: IrisService,
    private http: Http
  ) {}

  fetch(): Observable<Array<ServicePackage>> {
    return this.iris.mockGet('/servicePackage');
  }
}
