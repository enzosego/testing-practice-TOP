const { 
  reverseString,
  capitalize,
  calculator,
  analyze,
  cipherConverter
} = require('./practice');

test('Capitalize first letter of a string', () => 
  expect(capitalize('whatever')).toBe('Whatever'));

test('Reverse a string', () => 
  expect(reverseString('Hey how you doin')).toBe('niod uoy woh yeH'));

//Calculator testing
test('Sum', () => 
 expect(calculator.sum(1, 2)).toBe(3));

test('Substract', () => 
  expect(calculator.substract(5, 2)).toBe(3));

test('Division', () =>
  expect(calculator.division(10, 2)).toBe(5));

test('Multiplication', () => 
  expect(calculator.multiply(5, 6)).toBe(30)); 

test('Get the average, min, max and length of an array', () => {
  expect(analyze([1, 2, 3, 5, 4])).toStrictEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5
  });
});

//Caesar's cipher testing
test('Cipher works', () => 
  expect(cipherConverter('caesarcipher', 10)).toBe('mkockbmszrob'));

test('Cipher keeps the same case', () => 
  expect(cipherConverter('WhatEverDudE', 6)).toBe('CngzKbkxJajK'));

test('Cipher works with punctiation', () => 
  expect(cipherConverter('it\'s still?. wo!rking!', 12)).toBe('uf\'e efuxx?. ia!dwuzs!'))
