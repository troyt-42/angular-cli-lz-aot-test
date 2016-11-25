import {Component, Input} from '@angular/core';

import {Colors} from '../../../../../models';

@Component({
  selector: 'table-of-contents-item-label',
  templateUrl: './table-of-contents-item-label.component.html',
  styleUrls: ['./table-of-contents-item-label.component.scss']
})
export class TableOfContentsItemLabelComponent {

  @Input()
  colors: Colors;

  @Input()
  number: number;

  @Input()
  text: string;

  @Input()
  isActive: boolean;

  @Input()
  isFinished: boolean;

  private backgroundImage: string;
  private heightClass: string;

  ngOnChanges() {
    this.backgroundImage = this.getBackgroundImage();
    this.heightClass = this.getHeightClass();

  }

  private getBackgroundImage() {
    return `url(/assets/table-of-contents-${this.number}.jpg)`;
  }

  private getHeightClass() {
    return this.isActive ? 'large' : 'small';
  }

}