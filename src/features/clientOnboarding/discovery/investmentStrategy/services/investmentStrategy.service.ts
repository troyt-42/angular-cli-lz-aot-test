import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';

import {IrisService} from '../../../../../services';
import {InvestingProfile} from '../../../../../models/investingProfile/investingProfile';

@Injectable()
export class InvestmentStrategyService {
  constructor(
    private http: Http,
    private iris: IrisService
  ) {

  }

  getInvestmentProfile(investingProfileCode: string): Observable<InvestingProfile> {
    return this.iris.mockGet(`/investingProfile/${investingProfileCode}`);
  }

}
