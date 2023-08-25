import RunsInController from "../RunsInController.ts";
import { spawn } from "node:child_process";
import { writeFile } from "node:fs/promises";
import { platform, arch } from "node:os";

export default class NativeController implements RunsInController {
  async writeFile(path, contents) {
    return writeFile(path, contents);
  }

  async spawn(cmd, args, options) {
    return spawn(cmd, args, options);
  }

  async platform() {
    return platform();
  }

  async arch() {
    return arch();
  }

  async exit(exitCode: number) {
    process.exitCode = exitCode;
  }
}
