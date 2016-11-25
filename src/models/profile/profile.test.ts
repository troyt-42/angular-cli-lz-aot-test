import {Profile, hasSelectedInvestingGoal, isInvestingGoalSelected, createDefaultProfile} from './profile';
import {InvestingGoal, createInvestingGoal} from '../investingGoals/investingGoal';
import {updateObject} from '../../state/util';

describe('Model: Profile', () => {
  let profile: Profile,
      selectedInvestingGoal: InvestingGoal;

  beforeEach(() => {
    selectedInvestingGoal = createInvestingGoal('A', 'Selected Goal', 0);
  });

  describe('when the profile does not have a selected investing goal', () => {
    beforeEach(() => {
      profile = createDefaultProfile();
    });

    describe('hasSelectedInvestingGoal()', () => {
      it('should return false', () => {
        expect(hasSelectedInvestingGoal(profile)).toEqual(false);
      });
    });

    describe('isInvestingGoalSelected()', () => {
      it('should return false', () => {
        expect(isInvestingGoalSelected(profile, selectedInvestingGoal)).toEqual(false);
      });
    });
  });

  describe('when the profile has a selected investing goal', () => {
    beforeEach(() => {
      profile = updateObject(createDefaultProfile(), {
        selectedInvestingGoal: selectedInvestingGoal
      });
    });

    describe('hasSelectedInvestingGoal()', () => {
      it('should return true', () => {
        expect(hasSelectedInvestingGoal(profile)).toEqual(true);
      });
    });

    describe('isInvestingGoalSelected()', () => {
      describe('and the investing goal is the same', () => {
        it('should return true', () => {
          expect(isInvestingGoalSelected(profile, selectedInvestingGoal)).toEqual(true);
        });
      });

      describe('and the investing goal is different', () => {
        let anotherInvestingGoal: InvestingGoal;

        beforeEach(() => {
          anotherInvestingGoal = createInvestingGoal('B', 'Another Goal', 1);
        });

        it('should return false', () => {
          expect(isInvestingGoalSelected(profile, anotherInvestingGoal)).toEqual(false);
        });
      });
    });
  });
});