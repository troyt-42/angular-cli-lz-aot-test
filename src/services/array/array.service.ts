import {Injectable} from '@angular/core';

import {LocaleService} from '../locale/locale.service';

@Injectable()
export class ArrayService {

  constructor(private localeService: LocaleService) {

  }

  getCommaDelimitedPhrases(phrases: Array<string>) {
    if (!phrases) {
      return '';
    }

    return phrases.reduce((text, phrase, phraseIndex, array) => {
      if (phraseIndex === 0) {
        return phrase;
      } else if (phraseIndex > 0 && phraseIndex !== array.length - 1) {
        return text + ', ' + phrase;
      } else {
        return text + ` ${this.getLocalizedAnd()} ` + phrase;
      }
    }, '');
  }

  private getLocalizedAnd() {
    return this.localeService.format({name: 'investmentStrategy'}, 'and');
  }

}