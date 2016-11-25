import {
  Pipe,
  PipeTransform
} from '@angular/core';

import {LocaleService} from '../../../services/locale';

@Pipe({
  name: 'localize',
  pure: false,
})
export class LocalizePipe implements PipeTransform {
  constructor(private localeService: LocaleService) {}

  transform(key: string, ...args): string {
    const segments = key.split(/\//);
    if (segments.length > 2) {
      throw new Error('More that one namespace appeared in the localization key');
    }

    return segments.length > 1
      ? this.localeService.format({name: segments.shift()}, segments.shift(), args)
      : this.localeService.format(null, key, args);
  }
}
