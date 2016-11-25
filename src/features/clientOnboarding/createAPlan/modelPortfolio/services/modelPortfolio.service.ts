import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';

import {IrisService} from '../../../../../services';
import {ModelPortfolio} from '../../../../../models/modelPortfolio/modelPortfolio';

@Injectable()
export class ModelPortfolioService {
  constructor(
    private http: Http,
    private iris: IrisService
  ) {

  }

  getModelPortfolio(modelPortfolioId: string): Observable<ModelPortfolio> {
    return this.iris.mockGet(`/modelPortfolio/${modelPortfolioId}`);
  }

}
