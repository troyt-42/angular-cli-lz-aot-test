import {Proportion} from './proportion';

export interface RiskRule extends Proportion {
  readonly code: string;
  readonly description: string;
}

export function getRiskColor(risk: RiskRule): string {
  switch (risk.code) {
    case '10': return '#ADCD71';
    case '20': return '#7DCED4';
    case '30': return '#FCC459';
    case '40': return '#FA9357';
    case '50': return '#FD6262';
  }
}