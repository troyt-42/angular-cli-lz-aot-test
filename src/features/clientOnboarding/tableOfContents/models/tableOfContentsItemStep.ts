export interface TableOfContentsItemStep {
  label: string;
  isDone: boolean;
  navigateTo: () => void;
}