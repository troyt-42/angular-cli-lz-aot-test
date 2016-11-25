import {NavigatorComponent} from './navigator.component';
import {NavigatorModule} from './navigator.module';
import {configureTestModule} from '../../test/testComponentModule';
import {TestComponentSupport} from '../../test/testComponentSupport';

describe('Component: NavigatorComponent', () => {
  let support: TestComponentSupport<NavigatorComponent>;

  beforeEach(configureTestModule({
    imports: [
      NavigatorModule
    ]
  }));

  beforeEach(() => {
    support = new TestComponentSupport<NavigatorComponent>(NavigatorComponent);

    support.component.color = 'red';
    support.detectChanges();
  });

  it('should have a red background color', () => {
    const backgroundColor = support.getStyle('nav').backgroundColor;
    expect(backgroundColor).toEqual('red');
  });
});