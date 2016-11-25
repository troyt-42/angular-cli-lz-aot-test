import {Injectable} from '@angular/core';

import {getQuestions, Questionnaire} from '../../../models/questionnaire/questionnaire';
import {hasSelectedInvestingGoal, Profile} from '../../../models/profile/profile';
import {AppStateService} from '../../../services/appStateService/appState.service';
import {Subscription} from 'rxjs';

@Injectable()
export class ClientOnboardingStateService {

  profile: Profile;
  profileSubscription: Subscription;
  questionnaire: Questionnaire;
  questionnaireSubscription: Subscription;

  constructor(appStateService: AppStateService) {
    this.profileSubscription = appStateService.getProfile().subscribe(
      profile => this.profile = profile
    );

    this.questionnaireSubscription = appStateService.getQuestionnaire().subscribe(
      questionnaire => this.questionnaire = questionnaire
    );
  }

  isInvestingGoalSelected(): boolean {
    return hasSelectedInvestingGoal(this.profile);
  }

  isQuestionnaireAnswered(): boolean {
    const questions = getQuestions(this.questionnaire);

    if (questions.length === 0) {
      return false;
    }

    const answeredQuestionnaire = this.profile.answeredQuestionnaire;

    return questions.every(question => {
      const foundAnswer = answeredQuestionnaire.answers.find(answer => answer.questionId === question.id);

      return foundAnswer ? foundAnswer.isAnswered : false;
    });
  }

  isInvestingProfileSelected(): boolean {
    return !!this.profile.selectedInvestingProfile;
  }

  isSignedUp(): boolean {
    return !!this.profile.userEmailAddress;
  }

  isServicePackageSelected(): boolean {
    return !!this.profile.selectedServicePackage;
  }

  isModelPortfolioSelected(): boolean {
    return !!this.profile.selectedModelPortfolio;
  }

}