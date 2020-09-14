import {
  assertEquals,
} from "https://deno.land/std/testing/asserts.ts";
import { toUtf8 } from "./mod.ts";

Deno.test({
  name: "toUtf8",
  fn() {
    assertEquals("test 🤝 \n 🤝", toUtf8("test :handshake: \n :handshake:"));
  }
})