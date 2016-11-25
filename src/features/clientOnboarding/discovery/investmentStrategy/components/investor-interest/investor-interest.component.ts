import {Component, Input} from '@angular/core';

@Component({
  selector: 'investor-interest',
  templateUrl: './investor-interest.component.html',
  styleUrls: ['./investor-interest.component.scss']
})
export class InvestorInterestComponent {

  @Input()
  percentage: number;

}
