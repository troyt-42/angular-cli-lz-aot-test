import {
  ChangeDetectorRef,
  Component,
  Inject,
  Input,
  Optional
} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {Observable, Subscription} from 'rxjs';

import {LocaleService} from '../../../services/locale';
import {NamespaceDirective} from '../namespace/namespace.directive';
import {AppStateService} from '../../../services/appStateService/appState.service';
import {LocaleRepository} from '../../../models/localization/localeRepository';

@Component({
  selector: '[localize]',
  template: `{{translated}}`
})
export class Localize {

  @Input()
  private localize: string;

  private localization$: Observable<LocaleRepository>;

  private translated: string;
  private subscription: Subscription;

  constructor(
    appStateService: AppStateService,
    private changeDetectorRef: ChangeDetectorRef,
    private service: LocaleService,
    @Optional() @Inject(NamespaceDirective) private namespace: NamespaceDirective
  ) {
    this.localization$ = appStateService.getLocalization();
    this.subscription = this.localization$.subscribe(() => this.update());
  }

  private ngOnChanges() {
    if (new AsyncPipe(this.changeDetectorRef).transform(this.localization$)) {
      this.update();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private update() {
    if (this.localize == null || this.localize.length === 0) {
      return;
    }

    this.translated = this.service.format(this.namespace, this.localize);

    this.changeDetectorRef.detectChanges();
  }
}
