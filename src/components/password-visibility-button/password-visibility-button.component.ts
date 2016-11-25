import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Colors} from '../../models/customization/colors';

@Component({
  selector: 'password-visibility-button',
  templateUrl: './password-visibility-button.component.html',
  styleUrls: ['./password-visibility-button.component.scss']
})
export class PasswordVisibilityButtonComponent {

  @Input()
  colors: Colors;

  @Output()
  visibleChanges: EventEmitter<boolean> = new EventEmitter<boolean>();

  isVisible: boolean;

  onToggle() {
    this.isVisible = !this.isVisible;
    this.visibleChanges.emit(this.isVisible);
  }

}
