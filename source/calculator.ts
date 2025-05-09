import packageJson from "../package.json" with { type: "json" };

export interface Calculator {
  version: string;
  add: typeof add;
  subtract: typeof subtract;
  multiply: typeof multiply;
  divide: typeof divide;
}

/**
 * Adds two numbers together.
 *
 * @param a
 * @param b
 * @returns
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Subtracts two numbers.
 *
 * @param a
 * @param b
 * @returns
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * Multiplies two numbers.
 *
 * @param a
 * @param b
 * @returns
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Divides two numbers.
 *
 * @param a
 * @param b
 * @returns
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

export const calculator: Calculator = {
  version: packageJson.version,
  add,
  subtract,
  multiply,
  divide,
};

export function sayHHello() {
  return "Hello, world!";
}
