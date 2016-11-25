import {ButtonControlComponent} from './button-control.component';
import {CommonComponentsModule} from '../commonComponents.module';
import {TestComponentSupport} from '../../test/testComponentSupport';
import {configureTestModule} from '../../test/testComponentModule';

describe('Component: ButtonControlComponent', () => {
  let support: TestComponentSupport<ButtonControlComponent>;

  beforeEach(configureTestModule({
    imports: [
      CommonComponentsModule
    ]
  }));

  beforeEach(() => {
    support = new TestComponentSupport<ButtonControlComponent>(ButtonControlComponent);

    support.component.id = 'button-1';
    support.detectChanges();
  });

  describe('when no type is specified', () => {
    it('should have a type of button', () => {
      const type = support.getAttributeValue('#' + support.component.id, 'type');
      expect(type).toEqual('button');
    });
  });

  describe('when a type is specified to submit', () => {
    beforeEach(() => {
      support.component.type = 'submit';
      support.detectChanges();
    });

    it('should have type of that specified', () => {
      const type = support.getAttributeValue('#' + support.component.id, 'type');
      expect(type).toEqual('submit');
    });
  });

  describe('when a class name is specified', () => {
    it('should render the button with the correct classes', () => {
      support.component.className = 'test-class';
      support.detectChanges();

      const classNames = support.getClassNames('#' + support.component.id);
      expect(classNames).toContain('test-class');
    });
  });

  describe('when not inverting colors', () => {
    it('should get the first color', () => {
      expect(support.component.getColor('red', 'blue')).toEqual('red');
    });
  });

  describe('when inverting colors', () => {
    beforeEach(() => {
      support.component.invertColors = true;
    });

    it('should get the first color', () => {
      expect(support.component.getColor('red', 'blue')).toEqual('blue');
    });
  });

  describe('when the showChevron option is false', () => {
    beforeEach(() => {
      support.component.showChevron = false;
      support.detectChanges();
    });

    it('should not render a chevron', () => {
      const span = support.querySelector('.fa.fa-chevron-right');

      expect(span).toBeNull();
    });
  });

  describe('when the showChevron option is true', () => {
    beforeEach(() => {
      support.component.showChevron = true;
      support.detectChanges();
    });

    it('should render a font-awesome chevron after the text', () => {
      const span = support.querySelector('.fa.fa-chevron-right');

      expect(span instanceof HTMLSpanElement).toEqual(true);
    });
  });

});