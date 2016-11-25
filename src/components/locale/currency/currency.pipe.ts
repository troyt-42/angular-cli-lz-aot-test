import {Pipe, PipeTransform} from '@angular/core';
import {Subscription} from 'rxjs';

import {getFormat} from '../language-formats';
import {AppStateService} from '../../../services/appStateService/appState.service';
import {LocaleRepository} from '../../../models/localization/localeRepository';

const numeral = require('numeral');

@Pipe({
  name: 'currency',
})
export class CurrencyPipe implements PipeTransform {

  localization: LocaleRepository;
  subscription: Subscription;

  constructor(appStateService: AppStateService) {
    this.subscription = appStateService.getLocalization().subscribe(
      localization => this.localization = localization
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  transform(amount: number): string {
    return this.localization.current ?
      numeral(amount).format(getFormat(this.localization.current)) :
      ' ';
  }
}
