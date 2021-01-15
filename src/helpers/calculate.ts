export interface LetterFreqType extends Record<string, number> {}

export const calculateLetterFrequencies = (someText: string) => {
  const symbols = someText.toLowerCase().split("");
  const pattern = /[a-z]/;
  const letterFrequencies: LetterFreqType = {};
  symbols.forEach((symbol) => {
    if (pattern.test(symbol)) {
      if (letterFrequencies[symbol]) {
        letterFrequencies[symbol] += 1;
      } else {
        letterFrequencies[symbol] = 1;
      }
    }
  });
  return letterFrequencies;
};