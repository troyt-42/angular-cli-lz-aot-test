import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[cardSectionEqualizer]'
})
export class CardSectionEqualizerDirective {

  cardSectionMap: Map<string, Array<any>>;

  private resizeTimer;

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    window.addEventListener('resize', this.onResize.bind(this));
  }

  // Poll until size of cards is non-zero.
  // Unfortunately haven't found an event to use instead of this.
  private resizeCheck() {
    this.resizeTimer = setInterval(this.onResize.bind(this), 250);
  }

  ngAfterViewInit() {
    this.resizeCheck();
  }

  ngOnDestroy() {
    clearInterval(this.resizeTimer);
  }

  private onResize() {
    this.createCardSectionMap();
    this.resizeCardSections();
  }

  private createCardSectionMap() {
    this.cardSectionMap = new Map<string, Array<any>>();

    this.getCardSections().forEach(cardSection => {
      if (cardSection.className) {
        if (!this.cardSectionMap.has(cardSection.className)) {
          this.cardSectionMap.set(cardSection.className, []);
        }

        this.cardSectionMap.get(cardSection.className).push(cardSection);
      }
    });
  }

  private getCardSections(): Array<any> {
    let cardSections = this.getElementArrayByTagName('CARD-SECTION');
    let preambles = this.getElementArrayByTagName('INVESTMENT-STRATEGY-PREAMBLE');

    return cardSections.concat(preambles);
  }

  private getElementArrayByTagName(tagname: string) {
    return [].slice.call(this.elementRef.nativeElement.getElementsByTagName(tagname));
  }

  private resizeCardSections() {
    let cardSectionResult;
    const cardSectionResults = this.cardSectionMap.values();

    do {
      cardSectionResult = cardSectionResults.next();

      const cardSections: Array<any> = cardSectionResult.value;

      if (cardSections && cardSections.length > 0) {
        this.resetCardSectionHeights(cardSections);

        const maxHeight = this.getMaxCardSectionHeight(cardSections);

        if (maxHeight > 0) {
          this.setMaxHeightOnCardSections(
            cardSections, maxHeight
          );
        }
      }
    } while (!cardSectionResult.done);
  }

  private resetCardSectionHeights(cardSections: Array<any>) {
    this.setCardSectionsHeight(cardSections, 'auto');
  }

  private setMaxHeightOnCardSections(cardSections: Array<any>, maxHeight: number) {
    this.setCardSectionsHeight(cardSections, maxHeight + 'px');
  }

  private setCardSectionsHeight(cardSections: Array<any>, value: string) {
    cardSections.forEach(
      cardSection => this.renderer.setElementStyle(cardSection, 'height', value)
    );
  }

  private getMaxCardSectionHeight(cardSections: Array<any>) {
    return cardSections.reduce(
      (maxHeight, cardSection) => Math.max(maxHeight, cardSection.offsetHeight), 0
    );
  }

}