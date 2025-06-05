import type { JavaScriptTypeBuilder, Static, TSchema } from "@sinclair/typebox";
import { Type } from "@sinclair/typebox";
import { Value } from "@sinclair/typebox/value";

import { is } from "#predicates";
import type { KeyOf } from "#typings";

export type SchemaName = KeyOf<JavaScriptTypeBuilder>;

const excludeFrom: SchemaName[] = ["Module", "Rest", "Transform"];

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

      if (excludeFrom.includes(build.name as SchemaName)) {
        return build;
      }

      return {
        [build.name](...args: unknown[]) {
          const schema = build(...args) as TSchema;

          schema.parse = createParse(schema);

          return schema;
        },
      }[build.name];
    },
  });
})();

type ValueOrUnknown<T> = T | (unknown & {});

type Parse = <T extends TSchema>(this: T, value: ValueOrUnknown<Static<T>>) => Static<T>;

function createParse<T extends TSchema>(schema: T): Parse {
  return function parse(value) {
    return Value.Parse(schema, value);
  };
}

declare module "@sinclair/typebox" {
  interface TSchema {
    parse: Parse;
  }
}
