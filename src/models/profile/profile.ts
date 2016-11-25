import {InvestingProfileSupport} from '../investingProfile/investingProfileSupport';
import {InvestingGoal} from '../investingGoals/investingGoal';
import {AnsweredQuestionnaire, createDefaultAnsweredQuestionnaire} from './answeredQuestionnaire';
import {ModelPortfolio} from '../modelPortfolio/modelPortfolio';
import {ServicePackage} from '../servicePackage';
import {ClientOnboardingStates} from './clientOnboardingStates';

export interface Profile {
  readonly clientOnboardingStateId: string;
  readonly userEmailAddress: string;
  readonly selectedInvestingGoal: InvestingGoal;
  readonly answeredQuestionnaire: AnsweredQuestionnaire;
  readonly selectedInvestingProfile: InvestingProfileSupport;
  readonly selectedModelPortfolio: ModelPortfolio;
  readonly selectedServicePackage: ServicePackage;
}

export function createDefaultProfile(): Profile {
  return {
    clientOnboardingStateId: ClientOnboardingStates.Discovery.id,
    userEmailAddress: null,
    selectedInvestingGoal: null,
    answeredQuestionnaire: createDefaultAnsweredQuestionnaire(),
    selectedInvestingProfile: null,
    selectedModelPortfolio: null,
    selectedServicePackage: null
  };
}

export function isInvestingGoalSelected(profile: Profile, investingGoal: InvestingGoal): boolean {
  return hasSelectedInvestingGoal(profile) &&
    profile.selectedInvestingGoal.goalCode === investingGoal.goalCode;
}

export function hasSelectedInvestingGoal(profile: Profile): boolean {
  return !!profile && !!profile.selectedInvestingGoal;
}