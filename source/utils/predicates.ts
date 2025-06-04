export type Predicate<T> = (value: unknown) => value is T;

/**
 * Filter out from `T` all types that aren't assignable to `U`.
 */
export type Include<T, U> = T extends U ? T : never;

/**
 * Represents any function type.
 */
export type AnyFunction = (...args: any[]) => any;

/**
 * Represents an array of any type.
 */
export type AnyArray = Array<any>;

/**
 * Checks if the given value is an array.
 *
 * @param value - The value to check.
 * @returns `true` if the value is an array, otherwise `false`.
 */
export function isArray(value: unknown): value is AnyArray {
  return Array.isArray(value);
}

/**
 * Checks if the given value is a function.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a function, otherwise `false`.
 */
export function isFunction(value: unknown): value is AnyFunction {
  return typeof value === "function";
}

export interface Is {
  array: typeof isArray;
  function: typeof isFunction;
}

/**
 * A collection of type predicates for common JavaScript types.
 */
export const is: Is = {
  array: isArray,
  function: isFunction,
};
