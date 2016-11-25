import {AssetAllocationComponent} from './asset-allocation.component';
import {TestComponentSupport} from '../../test/testComponentSupport';
import {CommonComponentsModule} from '../commonComponents.module';
import {configureTestModule} from '../../test/testComponentModule';

describe('Component: AssetAllocationComponent', () => {

  let support: TestComponentSupport<AssetAllocationComponent>;
  beforeEach(configureTestModule({
    imports: [
      CommonComponentsModule]
  }));
  beforeEach(() => {
    support = new TestComponentSupport<AssetAllocationComponent>(AssetAllocationComponent);
    support.detectChanges();
  });


  it('should have default classes applied', () => {
    // Due to ng2-charts is not compatibale with AoT, disable all the related code.
    
    // const classNames = support.getClassNames('base-chart');
    // expect(classNames).toContain('chart');
    // expect(classNames).toContain('mb2');
  });

  describe('when component is initialized', () => {

    describe('when showAnimation is true', () => {
      beforeEach(() => {
        support.component.showAnimation = true;
        support.update();
      });
      it('should define animation duration in chartOptions', () => {
        let duration = support.component.chartOptions.animation.duration;
        expect(duration).toBeDefined();
      });
      it('should set animation duration greater than 0 in chartOptions', () => {
        let duration = support.component.chartOptions.animation.duration;
        expect(duration).toBeGreaterThan(0);
      });
    });

    describe('when showTooltips is true', () => {
      beforeEach(() => {
        support.component.showTooltips = true;
        support.update();
      });
      it('should define tooltips in chartOptions', () => {
        let tooltipsEnabled = support.component.chartOptions.tooltips.enabled;
        expect(tooltipsEnabled).toBeDefined();
      });
      it('should enable tooltips in chartOptions', () => {
        let showTooltip = support.component.chartOptions.tooltips.enabled;
        expect(showTooltip).toBe(support.component.showTooltips);
      });
    });

    describe('when isResponsive is true', () => {
      beforeEach(() => {
        support.component.isResponsive = true;
        support.update();
      });
      it('should define responsive in chartOptions', () => {
        let responsive = support.component.chartOptions.responsive;
        expect(responsive).toBeDefined();
      });
      it('should enable tooltips in chartOptions', () => {
        let showTooltip = support.component.chartOptions.tooltips.enabled;
        expect(showTooltip).toBe(support.component.isResponsive);
      });
    });
  });
});
