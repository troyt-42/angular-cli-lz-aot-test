import {
  Component, ElementRef, Output, EventEmitter, ContentChildren,
  QueryList, Input
} from '@angular/core';

// Need to import jQuery and OwlCarousel for this component to work.
// Owl Carousel looks for `window.jQuery`, so we need to assign it ourselves.
import * as $ from 'jquery';
// (<any>window).jQuery = $;
import 'owl.carousel';

import {CarouselItemComponent} from './carousel-item.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
})
export class CarouselComponent {

  @Input()
  startPosition: number = 0;

  @Output()
  selectionChanged = new EventEmitter<number>();

  @ContentChildren('carouselItem')
  children: QueryList<CarouselItemComponent>;

  private subscription: Subscription;

  constructor(private element: ElementRef) {

  }

  ngAfterContentInit() {
    this.subscription = this.children.changes.subscribe(() => {
      this.createOwlCarousel();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.destroyOwlCarousel();
  }

  private createOwlCarousel() {
    this.getOwlElement().owlCarousel({
      center: true,
      items: 1.15,
      startPosition: this.startPosition
    });

    // This is required to hide the visible width adjustments of the carousel at runtime due the
    // combination of our use of css flexbox, carousel's use of translate3d and carousel's
    // dynamic style width adjustment - which are all delayed and occur after the carousel is
    // loaded rather than before.
    setTimeout(() => this.getOwlElement().find('.owl-stage-outer').show(), 500);

    this.getOwlElement().on('changed.owl.carousel', event => {
      this.selectionChanged.emit(event.item.index);
    });
  }

  private destroyOwlCarousel() {
    const carousel = this.getOwlElement().data('owl.carousel');
    if (carousel) {
      carousel.destroy();
    }
  }

  private getOwlElement() {
    return (<any>$(this.element.nativeElement.children[0]));
  }

}
