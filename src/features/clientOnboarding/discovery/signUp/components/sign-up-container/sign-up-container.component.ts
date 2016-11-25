import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

import {SignUpActions, ProfileActions, PasswordPolicyActions} from '../../../../../../state';
import {Colors, UserSignUp, SignUpInfo, PasswordPolicy, ClientOnboardingStates} from '../../../../../../models';
import {AppStateService} from '../../../../../../services/appStateService/appState.service';

@Component({
  templateUrl: './sign-up-container.component.html'
})
export class SignUpContainerComponent {

  private passwordPolicy$: Observable<PasswordPolicy>;
  private userSignUp$: Observable<UserSignUp>;
  private colors$: Observable<Colors>;

  constructor(
    private appStateService: AppStateService,
    private passwordPolicyActions: PasswordPolicyActions,
    private profileActions: ProfileActions,
    private signUpActions: SignUpActions,
    private router: Router
  ) {
    this.passwordPolicy$ = appStateService.getPasswordPolicy();
    this.userSignUp$ = appStateService.getUserSignUp();
    this.colors$ = appStateService.getColors();
  }

  ngOnInit() {
    this.passwordPolicyActions.load();
  }

  signUp(info: SignUpInfo) {
    this.signUpActions.signUp(info.email, info.password, info.consentForEmailNotification);
    this.nextStep();
  }

  nextStep() {
    this.profileActions.updateClientOnboardingState(ClientOnboardingStates.CreateAPlan.id);
    this.router.navigate(['clientOnboarding', 'tableOfContents']);
  }

}