import type { JavaScriptTypeBuilder, Static } from "@sinclair/typebox";
import { Type } from "@sinclair/typebox";

export const Schema: JavaScriptTypeBuilder = (() => {
  return new Proxy(Type, {});
})();

declare module "@sinclair/typebox" {
  type ParseValue<T> = T | (unknown & {});

  interface TSchema {
    parse<T extends TSchema>(this: T, value: ParseValue<Static<T>>): Static<T>;
  }
}
