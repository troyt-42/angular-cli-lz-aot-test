import {HeadingComponent} from './heading.component';
import {CommonComponentsModule} from '../commonComponents.module';
import {TestComponentSupport} from '../../test/testComponentSupport';
import {configureTestModule} from '../../test/testComponentModule';
import {createDefaultColors} from '../../models/customization/colors';

describe('Component: HeadingComponent', () => {
  let support: TestComponentSupport<HeadingComponent>;

  beforeEach(configureTestModule({
    imports: [
      CommonComponentsModule]
  }));

  beforeEach(() => {
    support = new TestComponentSupport<HeadingComponent>(HeadingComponent);
    support.component.colors = createDefaultColors();
    support.update();
  });

  it('has applied customized colour', () => {
    const style = support.getStyle('div');
    expect(style.color).toEqual('rgb(69, 66, 90)');
  });

  it('has a bottomMarginClass defined', () => {
    const classNames = support.getClassNames('div');
    expect(classNames).toContain(support.component.bottomMarginClass);
  });

  it('has a fontSizeClass defined', () => {
    const classNames = support.getClassNames('div');
    expect(classNames).toContain(support.component.fontSizeClass);
  });

  describe('When the component is bold', () => {
    beforeEach(() => {
      support.component.bold = true;
      support.update();
    });
    it('should render with the correct class', () => {
      const classNames = support.getClassNames('div');
      expect(classNames).toContain('bold');
    });
  });
  describe('When the component is not bold', () => {
    beforeEach(() => {
      support.component.bold = false;
      support.update();
    });
    it('should render with the correct class', () => {
      const classNames = support.getClassNames('div');
      expect(classNames).not.toContain('bold');
    });
  });

  describe('When component is centered', () => {
    beforeEach(() => {
      support.component.center = true;
      support.update();
    });

    it('should render with the correct classes', () => {
      const className = support.getClassNames('div');

      expect(className).not.toContain('mx2');
      expect(className).not.toContain('pl1');
      expect(className).not.toContain('leftAlign');
      expect(className).toContain('centerAlign');
    });
  });

  describe('When component is not centered', () => {
    beforeEach(() => {
      support.component.center = false;
      support.update();
    });
    it('should render with the correct classes', () => {
      const className = support.getClassNames('div');

      expect(className).toContain('mx2');
      expect(className).toContain('pl1');
      expect(className).toContain('leftAlign');
      expect(className).not.toContain('centerAlign');
    });
  });

});
