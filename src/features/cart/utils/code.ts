import { DISCOUNT_CODE_REGEX } from "../constants";

const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomLetter = (letterCase: 'uppercase' | 'lowercase' | 'both') => {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';

    let letters = uppercaseLetters + lowercaseLetters;

    if (letterCase === 'uppercase') letters = uppercaseLetters;
    if (letterCase === 'lowercase') letters = lowercaseLetters;
    
    return letters.charAt(getRandomNumber(0, letters.length - 1));
  }

export const generateCode = (pattern: string) => {
    let code = '';

    for (let i = 0; i < pattern.length; i++) {
      if (pattern[i] === 'N') {
        code += getRandomNumber(0, 9);
      } else if (pattern[i] === 'L') {
        code += getRandomLetter('uppercase');
      } else if (pattern[i] === 'l') {
        code += getRandomLetter('lowercase');
      } else {
        code += pattern[i];
      }
    }
  
    return code;
  }
  

export const isCodeValid = (code: string, expectedPatternRegex = DISCOUNT_CODE_REGEX) => expectedPatternRegex.test(code)