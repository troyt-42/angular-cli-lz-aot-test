import { Input, Component } from '@angular/core';

@Component({
  selector: 'navigator-item',
  template: `
    <div
      [attr.data-testid]="testid"
      class="truncate"
      [ngClass]="{
         mr2: mr,
         ml2: ml
      }">
      <ng-content></ng-content>
    </div>
  `
})
export class NavigatorItem {
  @Input() mr = false;
  @Input() ml = false;
  @Input() testid: string;
};
