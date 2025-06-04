import { describe, it, test } from "node:test";

import { Type } from "@sinclair/typebox";
import { expect } from "chai";

import { Schema } from "./schema.ts";

describe("Schema.Any()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Any();

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Argument()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Argument(0);

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Array()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Array(Schema.Any());

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.AsyncIterator()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.AsyncIterator(Schema.Any());

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Awaited()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Awaited(Schema.Any());

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.BigInt()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.BigInt();

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Boolean()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Boolean();

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Capitalize()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Capitalize(Schema.String());

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Composite()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Composite([Schema.Any(), Schema.String()]);

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Const()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Const("test");

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Constructor()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Constructor([Schema.Any()], Schema.Any());

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.ConstructorParameters()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.ConstructorParameters(Schema.Any());

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Date()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Date();

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Enum()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Enum({});

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Exclude()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Exclude();

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Extends()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Extends();

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Extract()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Extract();

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Function()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Function();

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Index()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Index();

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.InstanceType()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.InstanceType();

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Instantiate()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Instantiate();

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Integer()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Integer();

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Intersect()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Intersect();

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Iterator()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Iterator();

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.KeyOf()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.KeyOf();

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Literal()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Literal();

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Lowercase()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Lowercase();

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Mapped()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Mapped();

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Module()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Module({});

    // @ts-expect-error
    expect(schema.parse).to.be.undefined;
  });
});

describe("Schema.Never()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Never();

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Not()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Not(Schema.Any());

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Null()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Null();

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Number()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Number();

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Object()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Object({});

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Omit()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Omit(Schema.Any(), [""]);

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Optional()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Optional(Schema.Any());

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Parameters()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Parameters(Schema.Any());

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Partial()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Partial(Schema.Any());

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Pick()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Pick(Schema.Object({ name: Schema.String() }), ["name"]);

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Promise()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Promise(Schema.Any());

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Readonly()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Readonly(Schema.Any());

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.ReadonlyOptional()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.ReadonlyOptional(Schema.Any());

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Record()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Record(Schema.Any(), Schema.Any());

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Recursive()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Recursive(() => Schema.Any());

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Ref()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Ref("");

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.RegExp()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.RegExp("pattern");

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Required()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Required(Schema.Any());

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Rest()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Rest(Schema.Any());

    // @ts-expect-error
    expect(schema.parse).to.be.undefined;
  });
});

describe("Schema.ReturnType()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.ReturnType(Schema.Any());

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.String()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.String();

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Symbol()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Symbol();

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.TemplateLiteral()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.TemplateLiteral("literal");

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Transform()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Transform(Schema.Any());

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Tuple()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Tuple([Schema.Any(), Schema.Any()]);

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Uint8Array()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Uint8Array();

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Uncapitalize()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Uncapitalize(Schema.String());

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Undefined()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Undefined();

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Union()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Union([Schema.Any(), Schema.String()]);

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Unknown()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Unknown();

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Unsafe()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Unsafe();

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Uppercase()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Uppercase(Schema.String());

    expect(schema.parse).to.be.a("function");
  });
});

describe("Schema.Void()", () => {
  it("creates a schema with a `parse` method", () => {
    const schema = Schema.Void();

    expect(schema.parse).to.be.a("function");
  });
});
