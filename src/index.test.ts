//src/index.test.ts

import { strict as assert } from "node:assert"
import { test as lib } from './index.js'
import test from "node:test"

test('synchronous passing test', (t) => {
  const result = lib("World");
  assert.strictEqual(result, "Hello World")
})

