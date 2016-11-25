import {Router} from '@angular/router';

import {StepNumberComponent} from './step-number.component';
import {TestComponentSupport} from '../../../../test/testComponentSupport';
import {configureTestModule} from '../../../../test/testComponentModule';
import {createDefaultColors} from '../../../../models/customization/colors';

class MockRouter {
  url: string = '/clientOnboarding/openAnAccount';
}

describe('Component: StepNumberComponent', () => {
  let support: TestComponentSupport<StepNumberComponent>;

  beforeEach(configureTestModule({
    declarations: [StepNumberComponent],
    providers: [
      {provide: Router, useClass: MockRouter}
    ]
  }));

  beforeEach(() => {
    support = new TestComponentSupport<StepNumberComponent>(StepNumberComponent);
    support.component.colors = createDefaultColors();
    support.detectChanges();
  });

  it('shows the number associated with the url', () => {
    const number = support.getInnerHtml('.stepNumber');
    expect(number).toEqual('3');
  });
});