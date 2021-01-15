import {calculateLetterFrequencies} from './calculate';

describe('calculateLetterFrequencies function', () => {
    it('should return empty object if passed empty string', () => {
      const result = calculateLetterFrequencies('');
      const expected = {};
      expect(result).toEqual(expected);
    });
    it('should return object with 3 keys and correct counts if passed string with 3 different symbols', () => {
        const result = calculateLetterFrequencies('abc');
        const expected = {a:1,b:1,c:1};
        expect(result).toEqual(expected);
      });
      it('should ignore whitespaces and nonletter symbols', () => {
        const result = calculateLetterFrequencies('abc??..   //8429;;');
        const expected = {a:1,b:1,c:1};
        expect(result).toEqual(expected);
      });
      it('should be case insesnsitive', () => {
        const result = calculateLetterFrequencies('Abc');
        const expected = {a:1,b:1,c:1};
        expect(result).toEqual(expected);
      });
      it('should return correct counts if passed complicated and long string', () => {
        const result = calculateLetterFrequencies('  it is long and complicated string made by SMARTMAN!!!, is it?');
        const expected = {a:5,b:1,c:2,d:3,e:2,g:2,i:6,l:2,m:4,n:4,o:2,p:1,r:2,s:4,t:5,y:1};
        expect(result).toEqual(expected);
      });
  });