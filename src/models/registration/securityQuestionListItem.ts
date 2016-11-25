
let count = 0;

export interface SecurityQuestionListItem {
  id: number;
  selectedQuestionId: string;
  answer: string;
};

export function createDefaultSecurityQuestionListItem(): SecurityQuestionListItem {
  return {
    id: count ++,
    selectedQuestionId: null,
    answer: null
  };
}
