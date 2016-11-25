import {DarkenColorPipe} from './darkenColor.pipe';

describe('Pipe: DarkenColorPipe', () => {
  let pipe: DarkenColorPipe;

  beforeEach(() => {
    pipe = new DarkenColorPipe();
  });

  describe('when the text is falsy', () => {
    it('should return null', () => {
      expect(pipe.transform(null, 10)).toEqual(null);
    });
  });

  describe('when the amount is falsy', () => {
    it('should return null', () => {
      expect(pipe.transform('red', null)).toEqual(null);
    });
  });

  describe('when the text and amount are valid', () => {
    it('should darken the color by the amount as a percentage', () => {
      expect(pipe.transform('white', 50)).toEqual('rgb(128, 128, 128)');
    });
  });
});