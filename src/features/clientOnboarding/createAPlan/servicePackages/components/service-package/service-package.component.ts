import {Component, Input} from '@angular/core';

import {ServicePackage} from '../../../../../../models';
import {CarouselItemComponent} from '../../../../../../components/carousel/carousel-item.component';
import {Colors} from '../../../../../../models/customization/colors';
import {calculateMonthlyFee} from '../../../../../../models/servicePackage/servicePackage';

@Component({
  selector: 'service-package',
  templateUrl: './service-package.component.html',
  styleUrls: ['./service-package.component.scss']
})
export class ServicePackageComponent extends CarouselItemComponent {

  private static readonly YEARLY_AMOUNT: number = 20000;

  @Input()
  private colors: Colors;

  @Input()
  private servicePackage: ServicePackage;

  private yearlyAmount: number = ServicePackageComponent.YEARLY_AMOUNT;
  private monthlyFee: number;

  ngOnChanges() {
    this.monthlyFee = calculateMonthlyFee(this.servicePackage, this.yearlyAmount);
  }

}