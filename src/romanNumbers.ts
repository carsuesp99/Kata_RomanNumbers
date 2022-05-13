export const convert = (cardinal: number): string => {

  let result: string = '';
  const ROMAN_VALUES_REVERSE = Object.keys(ROMAN_VALUES).reverse();

  ROMAN_VALUES_REVERSE.forEach(value => {
    const key = parseInt(value);
    while (cardinal >= key){
      cardinal -= key;
      result += ROMAN_VALUES[key];
    }
  });
  return result;
};

const ROMAN_VALUES = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M'
};
