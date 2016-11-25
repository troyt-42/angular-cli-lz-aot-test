import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'bolden'
})
export class BoldenPipe implements PipeTransform {

  transform(text: string): string {
    return text ? `<strong>${text}</strong>` : '';
  }

}