import {PercentPipe} from './percent.pipe';
import {MockAppStateService} from '../../../test/mockAppStateService';

describe('Pipe: Percent pipe', () => {

  let mockAppStateService = new MockAppStateService();
  let pipe = new PercentPipe(mockAppStateService);

  it('Should format a percentage in English', () => {
    mockAppStateService.emitTestLanguage('en-US');
    expect(pipe.transform(12.3)).toEqual('12.3%');
  });

  it('Should format a percentage in French', () => {
    mockAppStateService.emitTestLanguage('fr-FR');
    expect(pipe.transform(34.5)).toEqual('34,5&nbsp;%');
  });

  it('Should give 0% when no number provided', () => {
    expect(pipe.transform(null)).toEqual('0%');
  });

  it('Should format default when no language provided', () => {
    mockAppStateService.emitTestLanguage(null);
    expect(pipe.transform(99.9)).toEqual('99.9%');
  });
});
