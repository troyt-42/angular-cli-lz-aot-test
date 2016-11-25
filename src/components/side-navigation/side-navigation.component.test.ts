import {SideNavigationComponent} from './side-navigation.component';
import {TestComponentSupport} from '../../test/testComponentSupport';
import {CommonPipesModule} from '../../pipes/commonPipes.module';
import {configureTestModule} from '../../test/testComponentModule';
import {createDefaultColors} from '../../models/customization/colors';

describe('Component: Side Navigation', () => {

  let support: TestComponentSupport<SideNavigationComponent>;

  beforeEach(configureTestModule({
    imports: [CommonPipesModule],
    declarations: [SideNavigationComponent]
  }));

  beforeEach(() => {
    support = new TestComponentSupport<SideNavigationComponent>(
      SideNavigationComponent
    );
    support.component.show = false;
    support.component.colors = createDefaultColors();
    support.update();
  });

  it('should should have a nav with the content text color', () => {
    const color = support.getStyle('nav').color;
    expect(color).toEqual('rgb(69, 66, 90)');
  });

  it('should have a close button with a lightened context text color', () => {
    const color = support.getStyle('.fa.fa-times-thin').color;
    expect(color).toEqual('rgb(171, 168, 192)');
  });

  describe('when the menu is hidden', () => {
    beforeEach(() => {
      support.component.show = false;
      support.update();
    });

    it('should have a hidden nav element', () => {
      const classes = support.getClassNames('nav');
      expect(classes).not.toContain('visible');
    });
  });

  describe('when the menu is shown', () => {
    beforeEach(() => {
      support.component.show = true;
      support.update();
    });

    it('should have a visible nav element', () => {
      const classes = support.getClassNames('nav');
      expect(classes).toContain('visible');
    });

    it('should hide the menu when the close button is clicked', () => {
      support.querySelector('.fa.fa-times-thin').click();
      support.detectChanges();

      expect(support.component.show).toEqual(false);
    });
  });

});