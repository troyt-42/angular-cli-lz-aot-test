import {
  getSelectableInvestingProfiles,
  InvestingProfile, createDefaultInvestingProfile
} from './investingProfile';

describe('Model: InvestingProfile', () => {
  let investingProfile: InvestingProfile;

  describe('getSelectableInvestingProfiles()', () => {
    describe('when the input is falsy', () => {
      it('should return an empty list', function() {
        expect(getSelectableInvestingProfiles(null)).toEqual([]);
      });
    });

    describe('when the InvestingProfile has an empty list of alternative profiles', () => {
      beforeEach(() => {
        investingProfile = Object.assign(createDefaultInvestingProfile(), {
          alternativeProfiles: []
        });
      });

      it('should return null', function() {
        const investingProfiles = getSelectableInvestingProfiles(investingProfile);

        expect(investingProfiles.length).toEqual(1);
        expect(investingProfiles[0]).toEqual(investingProfile);
      });
    });

    describe('when the InvestingProfile has a list of alternative profiles', () => {
      beforeEach(() => {
        investingProfile = Object.assign(createDefaultInvestingProfile(), {
          conservativeRanking: 2,
          alternativeProfiles: [
            Object.assign(createDefaultInvestingProfile(), {
              conservativeRanking: 1
            }),
            Object.assign(createDefaultInvestingProfile(), {
              conservativeRanking: 3
            })
          ]
        });
      });

      it('should sort the InvestingProfile and alternatives by conservativeRanking', function() {
        const investingProfiles = getSelectableInvestingProfiles(investingProfile);

        expect(investingProfiles.length).toEqual(3);
        expect(investingProfiles[0].conservativeRanking).toEqual(3);
        expect(investingProfiles[1].conservativeRanking).toEqual(2);
        expect(investingProfiles[2].conservativeRanking).toEqual(1);
      });
    });
  });
});