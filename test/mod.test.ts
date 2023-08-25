import process from "node:process";
import assert from "node:assert";
import NativeController from "./NativeController.ts";
import execJob from "../mod.ts";
const test = Deno.test;

test("echo + echo", async () => {
  process.env.INPUT_STEPS =
    `- run: echo 'Hello world!'\n` + `- run: echo 'Hello again!'`;
  const c = new NativeController();
  await execJob(c);
});
