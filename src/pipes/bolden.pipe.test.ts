import {BoldenPipe} from './bolden.pipe';

describe('Pipe: BoldenPipe', () => {
  let pipe;

  beforeEach(() => {
    pipe = new BoldenPipe();
  });

  describe('when the text is falsy', () => {
    it('should return an empty string', () => {
      expect(pipe.transform(null)).toEqual('');
    });
  });

  describe('when the text is valid', () => {
    it('should add <strong> around the provided text', () => {
      expect(pipe.transform('Katie')).toEqual('<strong>Katie</strong>');
    });
  });
});