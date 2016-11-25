import {Injectable} from '@angular/core';
import {Store, Action} from '@ngrx/store';
import {Observable} from 'rxjs';

import {AppState} from '../../models/appState';
import {AnsweredQuestionnaire} from '../../models/profile';
import {Authentication} from '../../models/authentication';
import {Questionnaire} from '../../models/questionnaire';
import {Colors} from '../../models/customization';
import {InvestingGoals} from '../../models/investingGoals';
import {InvestingProfile} from '../../models/investingProfile';
import {LocaleRepository} from '../../models/localization';
import {ModelPortfolio} from '../../models/modelPortfolio';
import {PasswordPolicy} from '../../models/passwordPolicy';
import {Profile} from '../../models/profile';
import {Registration} from '../../models/registration';
import {ServicePackages} from '../../models/servicePackage';
import {UserSignUp} from '../../models/userSignUp';
import {Documents} from '../../models/documents/documents';
import {DocumentTypes} from '../../models/documentTypes/documentTypes';

@Injectable()
export class AppStateService {

  constructor(private store: Store<AppState>) {

  }

  select(selectFunction: (appState: AppState) => any): Observable<any> {
    return this.store.select(selectFunction);
  }

  dispatch(action: Action): void {
    this.store.dispatch(action);
  }

  getAnsweredQuestionnaire(): Observable<AnsweredQuestionnaire> {
    return this.select(appState => appState.profile.answeredQuestionnaire);
  }

  getAuthentication(): Observable<Authentication> {
    return this.select(appState => appState.authentication);
  }

  getColors(): Observable<Colors> {
    return this.select(appState => appState.customization.colors);
  }

  getDocuments(): Observable<Documents> {
    return this.select(appState => appState.documents);
  }

  getDocumentTypes(): Observable<DocumentTypes> {
    return this.select(appState => appState.documentTypes);
  }

  getInvestingGoals(): Observable<InvestingGoals> {
    return this.select(appState => appState.investingGoals);
  }

  getInvestingProfile(): Observable<InvestingProfile> {
    return this.select(appState => appState.investingProfile);
  }

  getLocalization(): Observable<LocaleRepository> {
    return this.select(appState => appState.localization);
  }

  getModelPortfolio(): Observable<ModelPortfolio> {
    return this.select(appState => appState.modelPortfolio);
  }

  getPasswordPolicy(): Observable<PasswordPolicy> {
    return this.select(appState => appState.passwordPolicy);
  }

  getProfile(): Observable<Profile> {
    return this.select(appState => appState.profile);
  }

  getQuestionnaire(): Observable<Questionnaire> {
    return this.select(appState => appState.questionnaire);
  }

  getRegistration(): Observable<Registration> {
    return this.select(appState => appState.registration);
  }

  getServicePackages(): Observable<ServicePackages> {
    return this.select(appState => appState.servicePackages);
  }

  getUserSignUp(): Observable<UserSignUp> {
    return this.select(appState => appState.userSignUp);
  }

}