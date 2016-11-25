import {Component, Input} from '@angular/core';

@Component({
  selector: 'card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.scss']
})
export class CardSectionComponent {

  @Input()
  private headingLocalizationKey: string;

  @Input()
  private backgroundColor: string;

}
