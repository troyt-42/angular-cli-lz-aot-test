import {NgModule} from '@angular/core';

import {
  BoldenPipe,
  DarkenColorPipe,
  HighlightPipe,
  LightenColorPipe
} from './index';

@NgModule({
  declarations: [
    BoldenPipe,
    DarkenColorPipe,
    HighlightPipe,
    LightenColorPipe
  ],
  exports: [
    BoldenPipe,
    DarkenColorPipe,
    HighlightPipe,
    LightenColorPipe
  ]
})
export class CommonPipesModule { }
