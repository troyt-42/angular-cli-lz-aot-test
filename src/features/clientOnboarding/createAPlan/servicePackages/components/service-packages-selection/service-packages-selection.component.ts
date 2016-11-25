import {Component, Input} from '@angular/core';

import {ServicePackage} from '../../../../../../models';
import {Colors} from '../../../../../../models/customization/colors';

@Component({
  selector: 'service-packages-selection',
  templateUrl: './service-packages-selection.component.html'
})
export class ServicePackagesSelectionComponent {

  @Input()
  private servicePackages: Array<ServicePackage>;

  @Input()
  private colors: Colors;

}
