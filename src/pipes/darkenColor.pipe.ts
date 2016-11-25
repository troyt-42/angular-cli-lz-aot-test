import {Pipe, PipeTransform} from '@angular/core';

const tinycolor = require('tinycolor2');

@Pipe({
  name: 'darkenColor'
})
export class DarkenColorPipe implements PipeTransform {

  transform(color: string, amount): string {
    return !!color && !!amount ? tinycolor(color).darken(amount).toRgbString() : null;
  }

}
