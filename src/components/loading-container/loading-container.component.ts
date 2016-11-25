import {Component, Input} from '@angular/core';
import {Loadable} from '../../models/loadable';

enum State {
  Loading, Error, Complete
}

@Component({
  selector: 'loading-container',
  templateUrl: './loading-container.component.html',
  styleUrls: ['./loading-container.component.scss']
})
export class LoadingContainerComponent {

  @Input()
  private loadable: Loadable;

  private State = State;
  private currentState: State = State.Loading;

  ngOnChanges() {
    this.currentState = this.getCurrentState();
  }

  private getCurrentState(): State {
    if (this.loadable.error) {
      return State.Error;
    } else if (this.loadable.isLoading) {
      return State.Loading;
    } else {
      return State.Complete;
    }
  }

}
