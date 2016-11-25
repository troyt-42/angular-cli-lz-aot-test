import {Component, Input} from '@angular/core';

@Component({
  selector: 'navigator',
  templateUrl: './navigator.component.html'
})
export class NavigatorComponent {

  @Input()
  color: string;

  @Input()
  justify: string = 'left';

}
