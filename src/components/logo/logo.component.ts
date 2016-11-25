import {Component, Input} from '@angular/core';

import {LocationService} from '../../services/location/location.service';

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {

  @Input()
  height: string = '3rem';

  constructor(private locationService: LocationService) {

  }

  get logoImageSrc() {
    return this.locationService.getCustomizationServiceUri('/logo');
  }

}
