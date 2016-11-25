import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {CommonPipesModule} from '../../pipes/commonPipes.module';

import {
  CurrencyPipe,
  LocaleSelector,
  Localize,
  LocalizePipe,
  NamespaceDirective,
  PercentPipe
} from './index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CommonPipesModule
  ],
  declarations: [
    CurrencyPipe,
    LocaleSelector,
    Localize,
    LocalizePipe,
    NamespaceDirective,
    PercentPipe
  ],
  exports: [
    CurrencyPipe,
    LocaleSelector,
    Localize,
    LocalizePipe,
    NamespaceDirective,
    PercentPipe
  ]
})
export class LocaleModule { }
