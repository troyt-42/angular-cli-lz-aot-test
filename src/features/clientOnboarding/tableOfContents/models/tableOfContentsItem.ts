import {TableOfContentsItemStep} from './tableOfContentsItemStep';
import {ClientOnboardingState} from '../../../../models/profile/clientOnboardingState';

export interface TableOfContentsItem {
  state: ClientOnboardingState;
  isActive: boolean;
  action: (steps?: Array<TableOfContentsItemStep>) => void;
  steps?: Array<TableOfContentsItemStep>;
}