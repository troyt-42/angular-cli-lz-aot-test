// import '..//styles/index.scss';
// import '../../../../node_modules/font-awesome/css/font-awesome.css';
import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {Colors} from '../../../models/customization/colors';
import {AutoScrollService} from '../../services';
import {AppState} from '../../../models/appState';
import {CustomizationActions} from '../../../state/customization/customization.actions';
import {LocalizationActions} from '../../../state/localization/localization.actions';

@Component({
  selector: 'application',
  templateUrl: './app.component.html'
})
export class ApplicationComponent {

  private colors$: Observable<Colors>;

  constructor(
    store: Store<AppState>,
    private customizationActions: CustomizationActions,
    private localizationActions: LocalizationActions,
    private router: Router,
    private autoScrollService: AutoScrollService
  ) {
    this.customizationActions.initialize();
    this.localizationActions.initialize();

    this.colors$ = store.select(appState => appState.customization.colors);
  }

  private ngOnInit() {
    this.autoScrollService.registerWithRouter(this.router);
  }

}
