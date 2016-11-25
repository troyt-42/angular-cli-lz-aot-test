import {LogoComponent} from './index';
import {ApplicationModule} from '../../app/app.module';
import {LocationService} from '../../services/location/location.service';
import {configureTestModule} from '../../test/testComponentModule';
import {TestComponentSupport} from '../../test/testComponentSupport';
import {createDefaultCustomization} from '../../models/customization/customization';
import {updateObject} from '../../state/util';
import {createDefaultIrisServer} from '../../models/customization/irisServer';

describe('Component: Logo', () => {
  let support: TestComponentSupport<LogoComponent>;

  beforeEach(configureTestModule({
    declarations: [LogoComponent],
    providers: [LocationService]
  }, {
    customization: updateObject(createDefaultCustomization(), {
      irisServer: updateObject(createDefaultIrisServer(), {
        url: 'http://www.somewhere.com'
      })
    })
  }));

  beforeEach(() => {
    support = new TestComponentSupport<LogoComponent>(LogoComponent);
    support.detectChanges();
  });

  it('should set the image location', () => {
    const src = support.getAttributeValue('img', 'src');
    expect(src).toContain('/api/v1/logo');
  });
});
