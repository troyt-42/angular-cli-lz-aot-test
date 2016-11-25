import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams, ResponseContentType} from '@angular/http';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {LocationService} from '../location/location.service';
import {IrisCredentials, Registration, IrisServer, SecurityQuestionListItem,
  SignUpInfo, getSecurityQuestionById, SecurityQuestions} from '../../models';
import {AppState} from '../../models/appState';
import {Documents} from '../../models/documents/documents';
import {createResponseBlob} from '../../util/createResponseBlob';
import {InvestorDocumentFile} from '../../models/documents/investorDocumentFile';

@Injectable()
export class IrisService {

  anonymousToken$: Observable<string>;
  currentLocale$: Observable<string>;
  tenant$: Observable<string>;
  registration: Registration;
  irisServer: IrisServer;
  userToken: string;

  // Temporary: map locale codes to the format IRIS understands.
  // Once we rename our locales to match IRIS this can be removed.
  private irisLocaleMap = {
    'en-US': 'ENGLISH',
    'fr-FR': 'FRENCH'
  };

  constructor(
    store: Store<AppState>,
    private http: Http,
    private location: LocationService
  ) {
    this.anonymousToken$ = store.select(appState => appState.authentication.anonymousToken);
    this.currentLocale$ = store.select(appState => appState.localization.current);
    this.tenant$ = store.select(appState => appState.customization.irisServer.tenant);

    store.select(appState => appState.customization.irisServer).subscribe(
      irisServer => this.irisServer = irisServer
    );

    store.select(appState => appState.registration).subscribe(
      registration => this.registration = registration
    );

    store.select(appState => appState.authentication).subscribe(
      authentication => this.userToken = authentication.userToken
    );
  }

  private getToken(userToken: string, anonymousToken: string) {
    // Use user token if user is logged in, otherwise anonymous token.
    return userToken || anonymousToken;
  }

  private areAllStringsTruthy(combined: Array<string>): boolean {
    return combined.every(s => !!s);
  }

  private createParams(locale: string): URLSearchParams {
    let params = new URLSearchParams();
    params.set('language', this.irisLocaleMap[locale]);

    return params;
  }

  get(relativePath: string, responseContentType: ResponseContentType = ResponseContentType.Json): Observable<any> {
    let combined$ = this.location.getIrisServiceUri(relativePath)
      .combineLatest(this.anonymousToken$, this.currentLocale$);

    return combined$
      .filter(this.areAllStringsTruthy)
      .mergeMap<any>((combined) => {
        const [url, anonymousToken, locale] = combined;

        const observable = this.http.get(url, {
          headers: new Headers({
            'Authorization': this.getToken(this.userToken, anonymousToken),
            'Accept-Language': this.irisLocaleMap[locale]
          }),
          responseType: responseContentType
        });

        return responseContentType === ResponseContentType.Json ?
          observable.map(r => r.json()) :
          observable;
      });
  }

  mockGet(relativePath): Observable<any> {
    let combined$ = this.location.getMockIrisServiceUri(relativePath)
      .combineLatest(this.currentLocale$);

    return combined$
      .filter(this.areAllStringsTruthy)
      .mergeMap<any>((combined) => {
        const [url, locale] = combined;

        return this.http.get(url, {
          search: this.createParams(locale)
        }).map(r => r.json());
      });
  }

  login(credentials: IrisCredentials): Observable<any> {
    // Note: these are not observables since login is only called after customization
    // API has successfully filled out these irisServer properties.
    const tenant = this.irisServer.tenant;
    const gateway = this.irisServer.gateway;

    let combined$ = this.location.getIrisServiceUri(
      `/authentication/login?tenant=${tenant}&gateway=${gateway}&userType=${credentials.userType}`)
      .combineLatest(this.currentLocale$);

    return combined$
      .filter(this.areAllStringsTruthy)
      .mergeMap<any>((combined) => {
        const [url, locale] = combined;
        return this.http.post(url, {
          username: credentials.username,
          password: credentials.password
        }, {
          headers: new Headers({
            'Accept-Language': this.irisLocaleMap[locale]
          })
        }).map(r => r.json());
      });
  }

  getPasswordPolicy(): Observable<any> {
    return this.tenant$
      .filter((tenant) => !!tenant)
      .mergeMap<any>((tenant) => this.location.getIrisServiceUri(`/realm/password-policies?tenant=${tenant}`))
      .mergeMap<any>((url) => {
        return this.http.get(url).map(r => r.json());
      });
  }

  verifyRegistration(userId: string, token: string): Observable<any> {
    return this.location.getIrisServiceUri(`/user/${userId}/activation/verify`)
      .mergeMap<any>((url) => {
        return this.http.get(url, {
          headers: new Headers({
            'Authorization': token
          })
        });
      });
  }

  getInvestingGoals() {
    return this.get('/investingGoal');
  }

  getDocuments(investorId: string, documents: Documents, documentTypeCode: string = 'ALL') {
    return this.get(
      `/document/list?entityType=INVESTOR&` +
      `entityId=${investorId}&` +
      `documentType=${documentTypeCode}&` +
      `page=${documents.currentPage}&` +
      `perPage=${documents.resultsPerPage}`
    );
  }

  getDocumentTypes(investorId: string) {
    return this.mockGet(`/investors/${investorId}/documents/types`);
  }

  getDocumentFileDocument(file: InvestorDocumentFile): Observable<Blob> {
    return this.get(`/document/${file.id}/download`, ResponseContentType.Blob)
      .map(response => createResponseBlob(response, file.contentType));
  }

  private formatSecurityQuestionAnswers(securityQuestions: SecurityQuestions) {
    return securityQuestions.list.map((listItem: SecurityQuestionListItem) => {
      const selectedQuestion = getSecurityQuestionById(securityQuestions.questions,
          listItem.selectedQuestionId);

      return {
        // TODO: For now, this endpoint requires text of the question.
        // This may change to ID of the question.
        securityQuestion: selectedQuestion.question,
        securityAnswer: listItem.answer
      };
    });
  }

  private formatRegisterRequestBody(basicInfo: SignUpInfo, securityQuestions: SecurityQuestions) {
    return {
      username: basicInfo.username,
      password: basicInfo.password,
      securityQuestionAnswers: this.formatSecurityQuestionAnswers(securityQuestions)
    };
  }

  activate(): Observable<any> {
    const userId = this.registration.verification.userId;
    const token = this.registration.verification.token;

    return this.location.getIrisServiceUri(`/user/${userId}/activation`)
      .mergeMap<any>((url) => {
        return this.http.post(url,
          this.formatRegisterRequestBody(this.registration.basicInfo, this.registration.securityQuestions),
          {
            headers: new Headers({
              'Authorization': token,
            })
          });
      });
  }
}
