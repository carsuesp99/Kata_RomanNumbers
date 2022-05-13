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

  it('should convert 100 to C', () => {
    const romanNumber = convert(100);
    expect(romanNumber).toBe('C');
  });

  it('should convert 4 to IV', () => {
    const romanNumber = convert(4);
    expect(romanNumber).toBe('IV');
  });

  it('should convert 6 to VI', () => {
    const romanNumber = convert(6);
    expect(romanNumber).toBe('VI');
  });

  it('should convert  12 to XII', () => {
    const romanNumber = convert(12);
    expect(romanNumber).toBe('XII');
  });

  it('should convert  543 to DXLIII', () => {
    const romanNumber = convert(543);
    expect(romanNumber).toBe('DXLIII');
  });

  it('should convert  410 to CDX', () => {
    const romanNumber = convert(410);
    expect(romanNumber).toBe('CDX');
  });

  it('should convert  484 to CDLXXXIV', () => {
    const romanNumber = convert(484);
    expect(romanNumber).toBe('CDLXXXIV');
  });
});
