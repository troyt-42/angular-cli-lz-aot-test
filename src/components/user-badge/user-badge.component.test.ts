import {UserBadgeComponent} from './user-badge.component';
import {CommonComponentsModule} from '../commonComponents.module';
import {TestComponentSupport} from '../../test/testComponentSupport';
import {configureTestModule} from '../../test/testComponentModule';

import {createDefaultUser} from '../../models';
import {updateObject} from '../../state/util';

describe('Component: UserBadgeComponent', () => {
  let support: TestComponentSupport<UserBadgeComponent>;

  beforeEach(configureTestModule({
    imports: [
      CommonComponentsModule
    ]
  }));

  beforeEach(() => {
    support = new TestComponentSupport<UserBadgeComponent>(UserBadgeComponent);
  });

  it('should show first name of user', () => {
    let testUser = updateObject(createDefaultUser(), {
      firstName: 'Andrew'
    });
    support.component.user = testUser;
    support.detectChanges();

    const span = support.querySelector('span');
    expect(span.innerHTML).toEqual('Andrew');
  });

});