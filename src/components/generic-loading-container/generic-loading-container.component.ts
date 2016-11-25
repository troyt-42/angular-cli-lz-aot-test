import {Component, Input} from '@angular/core';
import {Loadable, isErrorAnErrorObject, isErrorAString} from '../../models/loadable';

@Component({
  selector: 'generic-loading-container',
  templateUrl: './generic-loading-container.component.html',
  styleUrls: ['./generic-loading-container.component.scss']
})
export class GenericLoadingContainer {

  @Input()
  loadable: Loadable;

  isErrorAnErrorObject: boolean;
  isErrorAString: boolean;

  ngOnChanges() {
    this.isErrorAnErrorObject = isErrorAnErrorObject(this.loadable);
    this.isErrorAString = isErrorAString(this.loadable);
  }

}
