import {AlertComponent} from './alert.component';
import {TestComponentSupport} from '../../test/testComponentSupport';
import {createDefaultColors} from '../../models/customization/colors';
import {configureTestModule} from '../../test/testComponentModule';

describe('Component: AlertComponent', () => {
  let support;

  beforeEach(configureTestModule({
    declarations: [AlertComponent]
  }));

  beforeEach(() => {
    support = new TestComponentSupport<AlertComponent>(AlertComponent);

    support.component.id = 'alert-1';
    support.component.colors = createDefaultColors();
  });

  describe('when no type is defined', () => {
    beforeEach(() => {
      support.detectChanges();
    });

    it('should use primaryText for the color', () => {
      const color = support.getStyle('#' + support.component.id).color;
      expect(color).toEqual('rgb(255, 255, 255)');
    });

    it('should use primary for the background color', () => {
      const backgroundColor = support.getStyle('#' + support.component.id).backgroundColor;
      expect(backgroundColor).toEqual('rgb(67, 187, 200)');
    });
  });

  describe('when the alert is a success message', () => {
    beforeEach(() => {
      support.component.type = AlertComponent.Success;
      support.detectChanges();
    });

    it('should use the success color', () => {
      const color = support.getStyle('#' + support.component.id).color;
      expect(color).toEqual('rgb(123, 192, 133)');
    });

    it('should use the success background color', () => {
      const backgroundColor = support.getStyle('#' + support.component.id).backgroundColor;
      expect(backgroundColor).toEqual('rgb(212, 227, 180)');
    });
  });

  describe('when the alert is an error message', () => {
    beforeEach(() => {
      support.component.type = AlertComponent.Error;
      support.detectChanges();
    });

    it('should use the error color', () => {
      const color = support.getStyle('#' + support.component.id).color;
      expect(color).toEqual('rgb(185, 70, 73)');
    });

    it('should use the error background color', () => {
      const backgroundColor = support.getStyle('#' + support.component.id).backgroundColor;
      expect(backgroundColor).toEqual('rgb(250, 233, 233)');
    });
  });

});

