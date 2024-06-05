// calculator.test.js
const { add, subtract, multiply, divide } = require('./calculator');

// Positive tests
test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('multiplies 3 by 5 to equal 15', () => {
  expect(multiply(3, 5)).toBe(15);
});

test('divides 10 by 2 to equal 5', () => {
  expect(divide(10, 2)).toBe(5);
});

test('adds -1 + -2 to equal -3', () => {
  expect(add(-1, -2)).toBe(-3);
});

// Negative tests
test('adds 1 + 2 to not equal 4', () => {
  expect(add(1, 2)).not.toBe(4);
});

test('subtracts 5 - 3 to not equal 1', () => {
  expect(subtract(5, 3)).not.toBe(1);
});

test('multiplies 3 by 5 to not equal 20', () => {
  expect(multiply(3, 5)).not.toBe(20);
});

test('divides 10 by 2 to not equal 6', () => {
  expect(divide(10, 2)).not.toBe(6);
});

test('divides 10 by 0 to return null', () => {
  expect(divide(10, 0)).toBeNull();
});