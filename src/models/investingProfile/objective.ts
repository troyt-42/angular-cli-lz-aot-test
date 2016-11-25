import {Proportion} from './proportion';

export interface Objective extends Proportion {
  readonly code: string;
  readonly description: string;
}