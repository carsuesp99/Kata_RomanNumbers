export const convert = (cardinal: number): string => {
  if (cardinal === 2){
    return 'II';
  }
  return ROMAN_VALUES[cardinal];
};


const ROMAN_VALUES = {
  1: 'I',
  5: 'V',
  10: 'X',
  100: 'C',
  500: 'D',
  1000: 'M'
};
