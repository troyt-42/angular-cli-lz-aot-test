import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

import {ServicePackage} from '../../../../../../models/servicePackage/servicePackage';
import {Colors} from '../../../../../../models/customization/colors';
import {ProfileActions} from '../../../../../../state/profile/profile.actions';

@Component({
  selector: 'service-package-call-to-action',
  templateUrl: './service-package-call-to-action.component.html'
})
export class ServicePackageCallToActionComponent {

  @Input()
  servicePackage: ServicePackage;

  @Input()
  colors: Colors;

  constructor(
    private profileActions: ProfileActions,
    private router: Router
  ) {

  }

  selectServicePackage() {
    this.profileActions.selectServicePackage(this.servicePackage);
    this.router.navigateByUrl('/clientOnboarding/createAPlan/modelPortfolio');
  }

}