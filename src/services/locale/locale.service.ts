import {Inject, Injectable, Optional} from '@angular/core';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';

import {NamespaceDirective} from '../../components/locale/namespace/namespace.directive';
import {Locale, LocaleRepository} from '../../models/localization';
import {AppState} from '../../models/appState';

@Injectable()
export class LocaleService {

  localization: LocaleRepository;

  constructor(
    store: Store<AppState>,
    @Optional() @Inject(NamespaceDirective) private namespace: NamespaceDirective
  ) {
    store.select(appState => appState.localization).subscribe(
      localization => this.localization = localization
    );
  }

  get locale(): Locale {
    const fallback = 'en-US';

    return this.getLocaleFromCode(this.localization.current) ||
      this.getLocaleFromCode(navigator.language) ||
      this.getLocaleFromCode(fallback);
  }

  format(namespace: NamespaceDirective, key: string, replacements: Array<string> = []): string {
    return this.locale ?
      this.populateArguments(this.getTemplateForKey(namespace, key), replacements) :
      null;
  }

  private populateArguments(template: string, replacements: Array<string>) {
    return template.replace(/{(\d+)}/g, (match: string, index: number) => {
      return replacements[index] || match;
    });
  }

  private getTemplateForKey(namespace: NamespaceDirective, key: string) {
    return namespace ?
      this.locale.strings[namespace.name][key] :
      this.locale.strings[key];
  }

  private getLocaleFromCode(code: string) {
    if (code == null || code.length === 0) {
      return null;
    }

    return this.localization.locales instanceof Map ?
      this.localization.locales.get(code) :
      this.localization.locales[code];
  }

}
