import {
  InvestingGoal,
  sortInvestingGoalArray,
  createInvestingGoal
} from './investingGoal';

describe('Model: InvestingGoal', () => {
  const investingGoals: Array<InvestingGoal> = [];

  describe('sortInvestingGoalArray()', () => {
    describe('when the input is falsy', () => {
      it('should return null', () => {
        expect(sortInvestingGoalArray(null)).toBeNull();
      });
    });

    describe('when the input is an empty array', () => {
      it('should return an empty array', () => {
        expect(sortInvestingGoalArray([])).toEqual([]);
      });
    });

    describe('when the input contains an unsorted list of investing goals', () => {
      beforeEach(() => {
        investingGoals.push(createInvestingGoal('3', 'A', 3));
        investingGoals.push(createInvestingGoal('1', 'B', 1));
        investingGoals.push(createInvestingGoal('2', 'C', 2));
      });

      it('should return an empty array', () => {
        const sortedInvestingGoals = sortInvestingGoalArray(investingGoals);

        expect(sortedInvestingGoals.length).toEqual(investingGoals.length);
        expect(sortedInvestingGoals[0].sortOrder).toEqual(1);
        expect(sortedInvestingGoals[1].sortOrder).toEqual(2);
        expect(sortedInvestingGoals[2].sortOrder).toEqual(3);
      });
    });
  });
});