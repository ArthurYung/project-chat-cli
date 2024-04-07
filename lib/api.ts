import { spawnSync } from "child_process";
import { DIRNAME } from "./path";
import { print } from "./print";

function loadModule(name: string) {
  const res = spawnSync("npm", ["ls", name], { cwd: DIRNAME });
  if (!res.stdout.toString().includes(`${name}@`)) {
    print.info(`installing ${name}`);
    spawnSync("npm", ["install", name], {
      cwd: DIRNAME,
      stdio: "inherit",
    });
  }

  return import(name);
}

async function getOpenAI() {
  // const openai = import("openai");
  //
  // if (!openai) {
  //   await spawnSync("npm", ["install", "openai"], { cwd: __dirname });
  // }
  const openai = await loadModule("openai");
  console.log(openai);
}

export { getOpenAI };
