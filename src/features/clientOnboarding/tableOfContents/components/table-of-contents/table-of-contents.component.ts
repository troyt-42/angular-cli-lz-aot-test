import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

import {Profile} from '../../../../../models/profile/profile';
import {ClientOnboardingStates} from '../../../../../models/profile/clientOnboardingStates';
import {ClientOnboardingStateService} from '../../../services/clientOnboardingState.service';
import {TableOfContentsItem} from '../../models/tableOfContentsItem';
import {TableOfContentsItemStep} from '../../models/tableOfContentsItemStep';
import {scrollToElement} from '../../../../../util/scrollToElement';

@Component({
  selector: 'table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.scss'],
})
export class TableOfContentsComponent {

  @Input()
  profile: Profile;

  @Input()
  items: Array<TableOfContentsItem>;

  constructor(
    private router: Router,
    private clientOnboardingService: ClientOnboardingStateService
  ) {

  }

  // Returns first unfinished step or first step if all are finished.
  private firstUnfinishedStep(steps: Array<TableOfContentsItemStep>) {
    return steps.find((step) => !step.isDone) || steps[0];
  }

  ngOnChanges() {
    this.items = [
      {
        state: ClientOnboardingStates.Discovery,
        isActive: this.profile.clientOnboardingStateId === ClientOnboardingStates.Discovery.id,
        action: (steps) => {
          this.firstUnfinishedStep(steps).navigateTo();
        },
        steps: [
          {
            label: 'investingGoal',
            isDone: this.clientOnboardingService.isInvestingGoalSelected(),
            navigateTo: () => this.router.navigate(['clientOnboarding', 'discovery'])
          },
          {
            label: 'questionnaire',
            isDone: this.clientOnboardingService.isQuestionnaireAnswered(),
            navigateTo: () => this.router.navigate([
              'clientOnboarding', 'discovery', 'questionnaire',
              this.profile.selectedInvestingGoal.goalCode
            ])
          },
          {
            label: 'investingProfile',
            isDone: this.clientOnboardingService.isInvestingProfileSelected(),
            navigateTo: () => this.router.navigate(['clientOnboarding', 'discovery', 'investmentStrategy'])
          },
          {
            label: 'signUp',
            isDone: this.clientOnboardingService.isSignedUp(),
            navigateTo: () => this.router.navigate(['clientOnboarding', 'discovery', 'signUp'])
          }
        ]
      },
      {
        state: ClientOnboardingStates.CreateAPlan,
        isActive: this.profile.clientOnboardingStateId === ClientOnboardingStates.CreateAPlan.id,
        action: (steps) => {
          this.firstUnfinishedStep(steps).navigateTo();
        },
        steps: [
          {
            label: 'servicePackage',
            isDone: this.clientOnboardingService.isServicePackageSelected(),
            navigateTo: () => this.router.navigate(['clientOnboarding', 'createAPlan']),
          },
          {
            label: 'modelPortfolio',
            isDone: this.clientOnboardingService.isModelPortfolioSelected(),
            navigateTo: () => this.router.navigate(['clientOnboarding', 'createAPlan', 'modelPortfolio']),
          }
        ]
      },
      {
        state: ClientOnboardingStates.OpenAnAccount,
        isActive: this.profile.clientOnboardingStateId === ClientOnboardingStates.OpenAnAccount.id,
        action: () => {
          this.router.navigate(['clientOnboarding', 'openAnAccount']);
        }
      },
    ];
    scrollToElement(this.profile.clientOnboardingStateId, 0);
  }

}
