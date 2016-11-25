import {TestComponentSupport} from '../../test/testComponentSupport';
import {SideNavigationItemContainerComponent} from './side-navigation-item-container.component';
import {configureTestModule} from '../../test/testComponentModule';
import {createDefaultColors} from '../../models/customization/colors';
describe('Component: SideNavigationItemContainer', () => {

  let support: TestComponentSupport<SideNavigationItemContainerComponent>;

  beforeEach(configureTestModule({
    declarations: [SideNavigationItemContainerComponent]
  }));

  beforeEach(() => {
    support = new TestComponentSupport<SideNavigationItemContainerComponent>(
      SideNavigationItemContainerComponent
    );
    support.component.colors = createDefaultColors();
    support.update();
  });

  describe('when this container is not a footer', () => {
    beforeEach(() => {
      support.component.footer = false;
      support.update();
    });

    it('should grow to the maximum height', () => {
      expect(support.debugElement.nativeElement.classList).toContain('grow');
    });
  });

  describe('when this container is a footer', () => {
    beforeEach(() => {
      support.component.footer = true;
      support.update();
    });

    it('should shrink to the minimum height', () => {
      expect(support.debugElement.nativeElement.classList).toContain('shrink');
    });
  });
});