import {
  Directive,
  Input,
} from '@angular/core';

@Directive({
  selector: '[namespace]',
})
export class NamespaceDirective {
  @Input('namespace') public name: string;
}
