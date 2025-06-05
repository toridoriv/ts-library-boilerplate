import { Type } from "@sinclair/typebox";
import { describe, expect, it } from "vitest";

import type { SchemaName } from "./schema.ts";
import { Schema } from "./schema.ts";

describe("Schema", () => {
  const properties = Object.keys(Type) as SchemaName[];

  it("has the same properties as Type", () => {
    expect(Schema).to.have.all.keys(properties);
  });
});
