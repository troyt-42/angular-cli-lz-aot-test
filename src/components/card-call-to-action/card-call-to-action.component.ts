import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Colors} from '../../models/customization/colors';

@Component({
  selector: 'card-call-to-action',
  templateUrl: './card-call-to-action.component.html'
})
export class CardCallToActionComponent {

  @Input()
  localizedTextKey: string;

  @Input()
  localizedButtonLabelKey: string;

  @Input()
  colors: Colors;

  @Output()
  buttonPressed: EventEmitter<any> = new EventEmitter<any>();

  justifyClassName: string;

  ngOnChanges() {
    this.justifyClassName = this.localizedTextKey ? 'justify-between' : 'justify-end';
  }

  onButtonPressed() {
    this.buttonPressed.emit();
  }

}
