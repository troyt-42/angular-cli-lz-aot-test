import {AssetAllocationLegendComponent} from './asset-allocation-legend.component';
import {TestComponentSupport} from '../../test/testComponentSupport';
import {createAssetAllocation} from '../../models/assetAllocation';
import {configureTestModule} from '../../test/testComponentModule';
import {async} from '@angular/core/testing';

describe('Component: AssetAllocationLegendComponent', () => {

  let support: TestComponentSupport<AssetAllocationLegendComponent>;

  beforeEach(configureTestModule({
    declarations: [AssetAllocationLegendComponent]
  }));

  beforeEach(() => {
    support = new TestComponentSupport<AssetAllocationLegendComponent>(
      AssetAllocationLegendComponent
    );

    support.component.assetAllocatable = {
      assetAllocations: [
        createAssetAllocation('1', 20),
        createAssetAllocation('2', 50),
        createAssetAllocation('3', 30)
      ]
    };

    support.detectChanges();
  });

  it('has a bottomMarginClass defined', () => {
    const classNames = support.getClassNames('table');
    expect(classNames).toContain(support.component.bottomMarginClass);
  });

});