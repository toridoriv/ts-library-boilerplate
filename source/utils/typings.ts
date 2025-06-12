/**
 * Represents the keys of `T`.
 */
export type KeyOf<T> = {
  [K in keyof T]: K;
}[keyof T];

/**
 * Represents a primitive data type in JavaScript.
 *
 * A primitive is a basic data type that is not an object and has no methods.
 * Primitives are immutable, meaning their values cannot be changed once they are created.
 *
 * The available primitive types in JavaScript are:
 * - string: Represents textual data, enclosed in single or double quotes.
 * - number: Represents numeric values, including integers and floating-point numbers.
 * - bigint: Represents integer values that are too large to be represented by a regular number.
 * - boolean: Represents a logical value, either true or false.
 * - symbol: Represents a unique identifier, often used as keys for object properties.
 * - null: Represents a deliberate non-value or null value.
 * - undefined: Represents a value that has not been assigned or is not defined.
 */
export type Primitive = string | number | bigint | boolean | symbol | null | undefined;

/**
 * Takes a type `T` and expands it recursively or one level deep based on the `recursively` option.
 *
 * If `recursively` is `true`, uses {@linkcode Expand.Recursive}, else it uses {@linkcode Expand.OneLevel}.
 *
 * The type `E` is used to specify types that should not be expanded, but returned as they are. The default
 * exclusions can be checked in {@linkcode Expand.Exclusions}.
 */
export type Expand<T, recursively extends boolean = false, E = Expand.Exclusions> = recursively extends true
  ? Expand.Recursive<T, E>
  : Expand.OneLevel<T, E>;

export namespace Expand {
  export type Exclusions =
    | ArrayBuffer
    | Blob
    | Date
    | FormData
    | Headers
    | Map<any, any>
    | Primitive
    | ReadableStream<any>
    | RegExp
    | Error;

  /**
   * Takes a type `T` and expands it into an object type with the same properties as `T`.
   *
   * Replaces any properties and array elements in `T` with their expanded types, up to one level deep.
   *
   * `E` specifies types that should not be expanded but returned as-is.
   */
  export type OneLevel<T, E = Exclusions> = T extends E
    ? T
    : T extends (...args: infer A) => infer R
      ? (...args: OneLevel<A, E>) => OneLevel<R, E>
      : T extends Promise<infer U>
        ? Promise<OneLevel<U, E>>
        : T extends Set<infer SetType>
          ? Set<OneLevel<SetType>>
          : T extends object
            ? { [K in keyof T]: T[K] }
            : T;

  /**
   * Takes a type `T` and expands it into an object type with the same properties as `T`.
   *
   * Replaces any properties and array elements in `T` with their expanded types,
   * recursively.
   *
   * `E` specifies types that should not be expanded but returned as-is.
   */
  export type Recursive<T, E = Exclusions> = T extends E
    ? T
    : T extends (...args: infer A) => infer R
      ? (...args: Recursive<A, E>) => Recursive<R, E>
      : T extends Promise<infer U>
        ? Promise<Recursive<U, E>>
        : T extends Set<infer SetType>
          ? Set<Recursive<SetType>>
          : T extends object
            ? { [K in keyof T]: Recursive<T[K], E> }
            : T;
}
