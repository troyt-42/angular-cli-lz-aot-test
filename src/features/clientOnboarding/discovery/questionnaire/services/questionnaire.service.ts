import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {IrisService} from '../../../../../services';
import {Questionnaire} from '../../../../../models/questionnaire/questionnaire';

@Injectable()
export class QuestionnaireService {

  constructor(private iris: IrisService) {

  }

  getQuestionnaire(goalId: string): Observable<Array<Questionnaire>> {
    // To use mock data:
    // return this.iris.mockGet(`/questionnaire/${goalId}`);

    return this.iris.get(`questionnaire/discovery/${goalId}/definition`);
  }

}
