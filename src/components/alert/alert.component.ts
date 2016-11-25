import {Component, Input} from '@angular/core';

import {Colors} from '../../models/customization/colors';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {

  static readonly Success = 'success';
  static readonly Error = 'error';

  @Input()
  id: string;

  @Input()
  type: string;

  @Input()
  colors: Colors;

  color: string;
  backgroundColor: string;

  ngOnChanges() {
    this.color = this.getColor();
    this.backgroundColor = this.getBackgroundColor();
  }

  private getColor() {
    switch (this.type) {
      case AlertComponent.Success: return this.colors.success;
      case AlertComponent.Error: return this.colors.error;
      default: return this.colors.primaryText;
    }
  }

  private getBackgroundColor() {
    switch (this.type) {
      case AlertComponent.Success: return this.colors.successBackground;
      case AlertComponent.Error: return this.colors.errorBackground;
      default: return this.colors.primary;
    }
  }

}
