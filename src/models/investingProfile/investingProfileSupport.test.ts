import {
  isPrimaryInvestingProfile,
  InvestingProfileSupport,
  createDefaultInvestingProfileSupport
} from './investingProfileSupport';
import {createDefaultInvestingProfile} from './investingProfile';

describe('Model: InvestingProfileSupport', () => {
  let investingProfile: InvestingProfileSupport;

  describe('isPrimaryInvestingProfile()', () => {
    describe('when the input is falsy', () => {
      it('should return false', () => {
        expect(isPrimaryInvestingProfile(null)).toEqual(false);
      });
    });

    describe('when the input is an InvestingProfile', () => {
      beforeEach(() => {
        investingProfile = createDefaultInvestingProfile();
      });

      it('should return true', () => {
        expect(isPrimaryInvestingProfile(investingProfile)).toEqual(true);
      });
    });

    describe('when the input is an alternative InvestingProfile', () => {
      beforeEach(() => {
        investingProfile = createDefaultInvestingProfileSupport();
      });

      it('should return false', () => {
        expect(isPrimaryInvestingProfile(investingProfile)).toEqual(false);
      });
    });
  });
});