const numeral = require('numeral');

export const getFormat = (code: string): string => {
  switch (code) {
    case 'fr-FR':
      // Unfortunately need to do this since numeral.js doesn't support
      // space character as thousands delimiter.
      numeral.languageData().delimiters.thousands = ' ';
      numeral.languageData().delimiters.decimal = ',';
      return '0,0[.]00 $';
    default:
      numeral.languageData().delimiters.thousands = ',';
      numeral.languageData().delimiters.decimal = '.';
      return '$0,0[.]00';
  }
};
