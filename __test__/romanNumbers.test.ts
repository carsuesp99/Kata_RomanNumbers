import { convert } from '../src/romanNumbers';

describe('Roman numbers', () => {
  it('should convert 1 to I', () => {
    const romanNumber = convert(1);
    expect(romanNumber).toBe('I');
  });

  it('should convert 2 to II', () => {
    const romanNumber = convert(2);
    expect(romanNumber).toBe('II');
  });

  it('should convert 5 to V', () => {
    const romanNumber = convert(5);
    expect(romanNumber).toBe('V');
  });
});
