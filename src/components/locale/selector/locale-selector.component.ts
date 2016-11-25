import {ChangeDetectorRef, Component, Input} from '@angular/core';

import {LocaleRepository, Locale} from '../../../models/localization';
import {LocalizationActions} from '../../../state/localization/localization.actions';
import {Colors} from '../../../models/customization/colors';
import {DarkenColorPipe} from '../../../pipes/darkenColor.pipe';

@Component({
  selector: 'locale-selector',
  templateUrl: './locale-selector.component.html',
  styleUrls: ['./locale-selector.component.scss']
})
export class LocaleSelector {

  @Input()
  private localeRepository: LocaleRepository;

  @Input()
  private colors: Colors;

  private locales: Array<Locale>;

  private darkenColorPipe = new DarkenColorPipe();

  constructor(
    private localizationActions: LocalizationActions,
    private changeDetector: ChangeDetectorRef
  ) {

  }

  ngOnChanges() {
    this.locales = this.getLocales();
  }

  isCurrentLocale(locale: Locale): boolean {
    return this.localeRepository.current === locale.isocode;
  }

  getLocaleColor(locale: Locale): string {
    return this.isCurrentLocale(locale) ?
      this.darkenColorPipe.transform(this.colors.primary, 5) :
      this.colors.contentText;
  }

  private getLocales() {
    const locales = [];

    this.localeRepository.locales.forEach(function(value, key){
      const locale = value;
      locales.push(value);
    });

    return this.sortLocales(locales);
  }

  private sortLocales(locales: Array<Locale>): Array<Locale> {
    return locales.sort((locale1, locale2) => locale1.description.localeCompare(locale2.description));
  }

  selectLocale(isocode: string) {
    this.localizationActions.select(isocode);
    this.changeDetector.detectChanges();
  }
}
