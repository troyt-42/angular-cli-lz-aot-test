import {HighlightPipe} from './highlight.pipe';
describe('Pipe: HighlightPipe', () => {
  let pipe;

  beforeEach(() => {
    pipe = new HighlightPipe();
  });

  describe('when the text is falsy', () => {
    it('should return an empty string', () => {
      expect(pipe.transform(null, 'cool')).toEqual('');
    });
  });

  describe('when the words to highlight are falsy', () => {
    it('should return itself', () => {
      expect(pipe.transform('Katie is cool', null)).toEqual('Katie is cool');
    });
  });

  describe('when the text and words to highlight are valid', () => {
    it('should add a highlight class around the matched text', () => {
      expect(pipe.transform('Katie is cool', 'cool')).toEqual(
        'Katie is <span class="highlight">cool</span>'
      );
    });
  });
});