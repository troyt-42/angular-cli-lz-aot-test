import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'text-button',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.scss']
})
export class TextButtonComponent {

  @Input()
  color: string;

  @Input()
  disabled: boolean = false;

  @Output()
  onClick: EventEmitter<any> = new EventEmitter();

}