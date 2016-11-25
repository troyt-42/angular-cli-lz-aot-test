import {ElementRef, Renderer} from '@angular/core';

export function scrollToElement(scrollToId: string, milliseconds = 100 ) {

  setTimeout(() => {
    if (scrollToId) {
      const element = document.getElementById(scrollToId);

      if (element) {
        element.scrollIntoView();
      }
    }
  }, milliseconds);
}

export function scrollElementIntoView(element: ElementRef, renderer: Renderer, milliseconds = 0 ) {
  setTimeout(() => {
    if (renderer && element && element.nativeElement) {
      renderer.invokeElementMethod(element.nativeElement, 'scrollIntoView', [true]);
    }
  }, milliseconds);
}
