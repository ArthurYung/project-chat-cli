import { existsSync, mkdirSync } from "fs";
import os from "os";
import path from "path";

const HOME_DIR = path.join(os.homedir(), ".project-chat-cli");
const CONFIG_PATH = path.join(HOME_DIR, "config.json");
const LOG_PATH = path.join(HOME_DIR, "log.log");
const DIRNAME = path.dirname("");

if (!existsSync(HOME_DIR)) {
  mkdirSync(HOME_DIR);
}

export { HOME_DIR, CONFIG_PATH, LOG_PATH, DIRNAME };
