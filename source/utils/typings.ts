/**
 * Represents the keys of `T`.
 */
export type KeyOf<T> = {
  [K in keyof T]: K;
}[keyof T];
