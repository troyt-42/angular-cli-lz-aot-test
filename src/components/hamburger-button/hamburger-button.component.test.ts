import {HamburgerButtonComponent} from './hamburger-button.component';
import {TestComponentSupport} from '../../test/testComponentSupport';
import {configureTestModule} from '../../test/testComponentModule';
import {createDefaultColors} from '../../models/customization/colors';
import {CommonPipesModule} from '../../pipes/commonPipes.module';

describe('Component: Hamburger Button', () => {

  let support: TestComponentSupport<HamburgerButtonComponent>;

  beforeEach(configureTestModule({
    imports: [CommonPipesModule],
    declarations: [HamburgerButtonComponent]
  }));

  beforeEach(() => {
    support = new TestComponentSupport<HamburgerButtonComponent>(
      HamburgerButtonComponent
    );
    support.component.showMenu = false;
    support.component.colors = createDefaultColors();
    support.update();
  });

  it('should have a lightened context text color', () => {
    const color = support.getStyle('label').color;
    expect(color).toEqual('rgb(171, 168, 192)');
  });

  it('should toggle the menu to be shown when clicking the hamburger', () => {
    support.querySelector('label').click();
    support.detectChanges();

    expect(support.component.showMenu).toEqual(true);
  });

});