import * as core from "@actions/core";
import * as YAML from "yaml";
import pEvent from "p-event";
import RunsInController from "./RunsInController.ts";

export default async function execJob(c: RunsInController): Promise<void> {
  const steps = YAML.parse(core.getInput("steps"));

  for (const step of steps) {
    if (step.uses) {
      throw new DOMException("Not supported yet", "NotSupportedError");
    }
  }

  for (const step of steps) {
    const shell = shellAliases[step.shell] ?? step.shell ?? "bash -e {0}";
    await c.writeFile("/tmp/run-me", step.run);
    const cmd = shell.replace("{0}", "/tmp/run-me").split(" ");
    const cp = await c.spawn(cmd[0], cmd.slice(1));
    await pEvent(cp, "exit");
  }
}
