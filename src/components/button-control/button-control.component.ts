import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Observable} from 'rxjs';

import {Colors} from '../../models/customization';
import {AppStateService} from '../../services/appStateService/appState.service';

@Component({
  selector: 'button-control',
  templateUrl: './button-control.component.html',
  styleUrls: ['./button-control.component.scss']
})
export class ButtonControlComponent {

  @Input()
  id: string;

  @Input()
  type: string;

  @Input()
  className: string;

  @Input()
  disabled: boolean = false;

  @Input()
  showChevron: boolean;

  @Input()
  invertColors: boolean = false;

  @Input()
  width: string = 'auto';

  @Output()
  onClick = new EventEmitter<any>();

  colors$: Observable<Colors>;

  constructor(appStateService: AppStateService) {
    this.colors$ = appStateService.getColors();
  }

  getColor(color1: string, color2: string) {
    return this.invertColors ? color2 : color1;
  }

  private handleClick() {
    if (!this.disabled) {
      this.onClick.emit();
    }
  }

}
