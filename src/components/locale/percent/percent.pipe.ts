import {Pipe, PipeTransform} from '@angular/core';
import {Subscription} from 'rxjs';

import {AppStateService} from '../../../services/appStateService/appState.service';
import {LocaleRepository} from '../../../models/localization/localeRepository';

@Pipe({
  name: 'percent',
})
export class PercentPipe implements PipeTransform {

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

  private periodToComma(text: string) {
    return text.replace(/\./, ',');
  }

  transform(text: number): string {
    if (!text) {
      return '0%';
    }

    if (!this.localization.current) {
      return `${text}%`;
    }

    switch (this.localization.current) {
      case 'fr-FR':
        return `${this.periodToComma(text.toString())}&nbsp;%`;
      default:
        return `${text}%`;
    }
  }

}