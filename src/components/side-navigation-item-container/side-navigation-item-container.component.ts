import {Component, Input, ElementRef, Renderer} from '@angular/core';

import {Colors} from '../../models/customization/colors';

@Component({
  selector: 'side-navigation-item-container',
  templateUrl: './side-navigation-item-container.component.html',
  styleUrls: ['./side-navigation-item-container.component.scss']
})
export class SideNavigationItemContainerComponent {

  @Input()
  footer: boolean = false;

  @Input()
  colors: Colors;

  styles: any;

  constructor(private elementRef: ElementRef, private renderer: Renderer) {

  }

  ngOnChanges() {
    this.renderer.setElementClass(
      this.elementRef.nativeElement,
      this.footer ? 'shrink' : 'grow',
      true
    );
  }

}