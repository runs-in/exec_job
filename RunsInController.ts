interface BasicChildProcess extends EventEmitter {
  stdin: Writable | null;
  stdout: Readable | null;
  stderr: Readable | null;
  exitCode: number | null;
}

interface RunsInController {
  writeFile(path: string, contents: string): void | Promise<void>;
  spawn(cmd, args, options): BasicChildProcess | Promise<BasicChildProcess>;
  platform(): string | Promise<string>;
  arch(): string | Promise<string>;
  exit(): void | Promise<void>;
}

export default RunsInController;
