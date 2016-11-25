import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class QuestionnaireRouterService {

  constructor(
    private router: Router
  ) {

  }

  navigateToInvestingGoals() {
    this.router.navigate(['clientOnboarding', 'discovery', 'investingGoals']);
  }

  navigateToQuestionnaire(goalCode: string) {
    this.router.navigateByUrl(
      `/clientOnboarding/discovery/questionnaire/${goalCode}`,
      {
        skipLocationChange: true
      }
    );
  }

  navigateToQuestion(goalCode: string, questionId: string) {
    this.router.navigateByUrl(
      `/clientOnboarding/discovery/questionnaire/${goalCode}/question/${questionId}`
    );
  }

  navigateToResults() {
    this.router.navigateByUrl('/clientOnboarding/discovery/investmentStrategy');
  }

}
