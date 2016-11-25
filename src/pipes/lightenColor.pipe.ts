import {Pipe, PipeTransform} from '@angular/core';

const tinycolor = require('tinycolor2');

@Pipe({
  name: 'lightenColor'
})
export class LightenColorPipe implements PipeTransform {

  transform(color: string, amount): string {
    return color && amount ? tinycolor(color).lighten(amount).toRgbString() : null;
  }

}
