import os from "os";
import path from "path";

export const HOME_DIR = path.join(os.homedir(), ".project-chat-cli");
export const CONFIG_PATH = path.join(HOME_DIR, "config.json");
