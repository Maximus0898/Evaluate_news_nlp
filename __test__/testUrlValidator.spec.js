import { isValidUrl } from '../src/client/js/urlValidator';

describe('Testing if input validation function defined', () => {
  test('Testing the isValidUrl() function', () => {
    expect(isValidUrl).toBeDefined();
  });
});

describe('Testing  input validation functionality', () => {
  test('Testing the isValidUrl() function', () => {
    expect(isValidUrl('https://www.google.com')).toBe(true);
  });
  test('Testing url without domain', () => {
    const url = 'https://.com';
    expect(isValidUrl(url)).toBe(false);
  });
  test('Testing url without http/https', () => {
    const url = 'google.com';
    expect(isValidUrl(url)).toBe(true);
  });
});
