import {NavigatorItem} from './navigator-item.component';
import {NavigatorModule} from './navigator.module';
import {configureTestModule} from '../../test/testComponentModule';
import {TestComponentSupport} from '../../test/testComponentSupport';

describe('Component: NavigatorItem', () => {
  let support: TestComponentSupport<NavigatorItem>;

  beforeEach(configureTestModule({
    imports: [NavigatorModule]
  }));

  beforeEach(() => {
    support = new TestComponentSupport<NavigatorItem>(NavigatorItem);
  });

  describe('when both mr and ml are true', () => {
    beforeEach(() => {
      support.component.mr = true;
      support.component.ml = true;
      support.detectChanges();
    });

    it('should render the button with the correct classes applied', () => {
      const classes = support.getAttributeValue('div', 'class');
      expect(classes).toBe('truncate mr2 ml2');
    });
  });

  describe('when only ml is true', () => {
    beforeEach(() => {
      support.component.ml = true;
      support.detectChanges();
    });

    it('should render the button with the correct classes applied', () => {
      const classes = support.getAttributeValue('div', 'class');
      expect(classes).toBe('truncate ml2');
    });
  });

});
