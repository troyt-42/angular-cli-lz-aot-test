import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subscription} from 'rxjs';

import {Colors, PasswordPolicy, Registration} from '../../../../../../models';
import {PasswordPolicyActions, VerificationActions} from '../../../../../../state';
import {AppStateService} from '../../../../../../services/appStateService/appState.service';

@Component({
  selector: 'basic-registration-container',
  templateUrl: './basic-container.component.html',
  styleUrls: ['./basic-container.component.scss']
})
export class BasicRegistrationContainerComponent {

  colors$: Observable<Colors>;
  private passwordPolicy$: Observable<PasswordPolicy>;
  private registration$: Observable<Registration>;
  private querySub: Subscription;

  private static userIdParamName = 'userId';
  private static tokenParamName = 'token';

  constructor(
    appStateService: AppStateService,
    private passwordPolicyActions: PasswordPolicyActions,
    private verificationActions: VerificationActions,
    private route: ActivatedRoute
  ) {
    this.colors$ = appStateService.getColors();
    this.passwordPolicy$ = appStateService.getPasswordPolicy();
    this.registration$ = appStateService.getRegistration();
  }

  ngOnInit() {
    this.passwordPolicyActions.load();

    this.querySub = this.route.queryParams
      .subscribe(params => {
        let userId = params[BasicRegistrationContainerComponent.userIdParamName];
        let token = params[BasicRegistrationContainerComponent.tokenParamName];
        if (userId && token) {
          this.verificationActions.verify(userId, token);
        }
      });
  }

  ngOnDestroy() {
    this.querySub.unsubscribe();
  }
}