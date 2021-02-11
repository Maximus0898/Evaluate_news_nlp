import { handleSubmit } from '../src/client/js/formHandler';

describe('Testing the submit functionality', () => {
  test('Testing the handleSubmit() function', () => {
    expect(handleSubmit).toBeDefined();
  });
});

describe('Testing if handleSubmit() is a function', () => {
  test('Testing handleSubmit()', () => {
    expect(typeof handleSubmit).toBe('function');
  });
});
