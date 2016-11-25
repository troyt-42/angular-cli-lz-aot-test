export interface InvestingGoal {
  readonly goalCode: string;
  readonly name: string;
  readonly sortOrder: number;
}

export function createInvestingGoal(
  goalCode: string = null, name: string = null, sortOrder: number = null
) {
  return {
    goalCode, name, sortOrder
  };
}

export function createDefaultInvestingGoal(): InvestingGoal {
  return createInvestingGoal();
}

export function sortInvestingGoalArray(investingGoals: Array<InvestingGoal>): Array<InvestingGoal> {
  if (!investingGoals) {
    return null;
  }

  return investingGoals.slice().sort((investingGoal1, investingGoal2) => {
    return investingGoal1.sortOrder - investingGoal2.sortOrder;
  });
}