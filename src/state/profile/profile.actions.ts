import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {InvestingProfileSupport} from '../../models/investingProfile/investingProfileSupport';
import {InvestingGoal} from '../../models/investingGoals/investingGoal';
import {ServicePackage} from '../../models';
import {ModelPortfolio} from '../../models/modelPortfolio/modelPortfolio';
import {AppState} from '../../models/appState';

@Injectable()
export class ProfileActions {

  static PROFILE_START = 'PROFILE_START';
  static PROFILE_UPDATE_CLIENT_ONBOARDING_STATE = 'PROFILE_UPDATE_CLIENT_ONBOARDING_STATE';
  static PROFILE_SET_USER_EMAIL_ADDRESS = 'PROFILE_SET_USER_EMAIL_ADDRESS';
  static PROFILE_SELECT_INVESTING_GOAL = 'PROFILE_SELECT_INVESTING_GOAL';
  static PROFILE_SELECT_INVESTING_PROFILE = 'PROFILE_SELECT_INVESTING_PROFILE';
  static PROFILE_SELECT_SERVICE_PACKAGE = 'PROFILE_SELECT_SERVICE_PACKAGE';
  static PROFILE_SELECT_MODEL_PORTFOLIO = 'PROFILE_SELECT_MODEL_PORTFOLIO';

  constructor(private store: Store<AppState>) {

  }

  start() {
    this.store.dispatch({
      type: ProfileActions.PROFILE_START
    });
  }

  updateClientOnboardingState(clientOnboardingStateId: string) {
    this.store.dispatch({
      type: ProfileActions.PROFILE_UPDATE_CLIENT_ONBOARDING_STATE,
      payload: clientOnboardingStateId
    });
  }

  setUserEmailAddress(emailAddress: string) {
    this.store.dispatch({
      type: ProfileActions.PROFILE_SET_USER_EMAIL_ADDRESS,
      payload: emailAddress
    });
  }

  selectInvestingGoal(investingGoal: InvestingGoal) {
    this.store.dispatch({
      type: ProfileActions.PROFILE_SELECT_INVESTING_GOAL,
      payload: investingGoal
    });
  }

  selectInvestingProfile(investmentProfile: InvestingProfileSupport) {
    return this.store.dispatch({
      type: ProfileActions.PROFILE_SELECT_INVESTING_PROFILE,
      payload: investmentProfile
    });
  }

  selectServicePackage(servicePackage: ServicePackage) {
    return this.store.dispatch({
      type: ProfileActions.PROFILE_SELECT_SERVICE_PACKAGE,
      payload: servicePackage
    });
  }

  selectModelPortfolio(modelPortfolio: ModelPortfolio) {
    return this.store.dispatch({
      type: ProfileActions.PROFILE_SELECT_MODEL_PORTFOLIO,
      payload: modelPortfolio
    });
  }

}