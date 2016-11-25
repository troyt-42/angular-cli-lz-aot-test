import {ServicePackage, calculateMonthlyFee, createDefaultServicePackage} from './servicePackage';
import {updateObject} from '../../state/util';

describe('Model: ServicePackage', () => {
  let servicePackage: ServicePackage;

  describe('calculateMonthlyFee()', () => {
    describe('when the service package is falsy', () => {
      it('should throw an error', () => {
        expect(() => calculateMonthlyFee(null, 0)).toThrowError('Requires a valid service package');
      });
    });

    describe('when the fee percentage is less than 0', () => {
      beforeEach(() => {
        servicePackage = updateObject(createDefaultServicePackage(), {
          feePercentage: -1
        });
      });

      it('should calculate the correct monthly fee for 30,000 yearly amount', () => {
        expect(() => calculateMonthlyFee(servicePackage, 30000))
          .toThrowError('The fee percentage must be greater than 0');
      });
    });

    describe('when the fee percentage is 0', () => {
      beforeEach(() => {
        servicePackage = updateObject(createDefaultServicePackage(), {
          feePercentage: 0
        });
      });

      it('should calculate the monthly fee for 30,000 yearly amount to be 0', () => {
        expect(calculateMonthlyFee(servicePackage, 30000)).toEqual(0);
      });
    });

    describe('when the fee percentage is 0.5', () => {
      beforeEach(() => {
        servicePackage = updateObject(createDefaultServicePackage(), {
          feePercentage: 0.5
        });
      });

      it('should calculate the monthly fee for 30,000 yearly amount to be 12.5', () => {
        expect(calculateMonthlyFee(servicePackage, 30000)).toEqual(12.5);
      });
    });
  });
});