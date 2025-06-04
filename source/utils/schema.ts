import type { JavaScriptTypeBuilder, Static, TSchema } from "@sinclair/typebox";
import { Type } from "@sinclair/typebox";
import { Value } from "@sinclair/typebox/value";

import { is } from "#predicates";
import type { KeyOf } from "#typings";

export type SchemaName = KeyOf<JavaScriptTypeBuilder>;

/**
 * Custom schema builder that adds the `parse` method to the TypeBox schemas.
 */
export const Schema: JavaScriptTypeBuilder = (() => {
  return new Proxy(Type, {
    get(target, prop) {
      const build = Reflect.get(target, prop);

      if (!is.function(build)) {
        return build;
      }

      return {
        [build.name](...args: unknown[]) {
          const schema = build(...args) as TSchema;

          schema.parse = parse.bind(schema);

          return schema;
        },
      }[build.name];
    },
  });
})();

type ValueOrUnknown<T> = T | (unknown & {});

function parse<T extends TSchema>(this: T, value: ValueOrUnknown<Static<T>>): Static<T> {
  return Value.Parse(this, value);
}

declare module "@sinclair/typebox" {
  interface TSchema {
    parse: typeof parse;
  }
}
