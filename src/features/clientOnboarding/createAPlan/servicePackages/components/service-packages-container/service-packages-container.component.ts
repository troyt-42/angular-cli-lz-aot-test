import {Component} from '@angular/core';
import {Observable} from 'rxjs';

import {ServicePackages} from '../../../../../../models';
import {ServicePackagesActions} from '../../../../../../state';
import {Colors} from '../../../../../../models/customization/colors';
import {AppStateService} from '../../../../../../services/appStateService/appState.service';

@Component({
  selector: 'service-packages-container',
  templateUrl: './service-packages-container.component.html'
})
export class ServicePackagesContainerComponent {

  private servicePackages$: Observable<ServicePackages>;
  private colors$: Observable<Colors>;

  constructor(
    appStateService: AppStateService,
    private servicePackagesActions: ServicePackagesActions
  ) {
    this.servicePackages$ = appStateService.getServicePackages();
    this.colors$ = appStateService.getColors();
  }

  ngOnInit() {
    this.servicePackagesActions.load();
  }
}
