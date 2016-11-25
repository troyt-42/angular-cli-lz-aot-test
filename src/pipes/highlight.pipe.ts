import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(text: string, words: string): string {
    if (!text) {
      return '';
    }

    return words ? this.highlightPhrase(text, words) : text;
  }

  private highlightPhrase(text: string, words: string) {
    return text.replace(
      new RegExp(words, 'gi'),
      `<span class="highlight">${words}</span>`
    );
  }

}
