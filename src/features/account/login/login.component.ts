import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';

import {Colors} from '../../../models/customization/colors';
import {AppStateService} from '../../../services/appStateService/appState.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  colors$: Observable<Colors>;

  constructor(appStateService: AppStateService) {
    this.colors$ = appStateService.getColors();
  }

}
