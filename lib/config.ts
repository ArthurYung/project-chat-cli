import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { CONFIG_PATH, HOME_DIR } from "./path";

interface ProjectConfig {
  /**  chat api token */
  token: string;
  /**  chat api url */
  url: string;
  /**  chat api model */
  model: string;
  /**  chat api proxy */
  proxy: string;
}

let configCache: ProjectConfig | null = null;

function readConfig(): ProjectConfig {
  if (configCache) {
    return configCache;
  }

  if (!existsSync(CONFIG_PATH)) {
    initConfig();
  }
  return JSON.parse(readFileSync(CONFIG_PATH, "utf-8"));
}

function writeConfig(config: ProjectConfig) {
  configCache = config;
  writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2));
}

function initConfig() {
  const config: ProjectConfig = {
    token: "",
    url: "",
    model: "",
    proxy: "",
  };

  writeConfig(config);
}

function getConfig() {
  return readConfig();
}

function setConfig(key: keyof ProjectConfig, value: string) {
  const config = readConfig();
  config[key] = value;
  writeConfig(config);
}

export { getConfig, setConfig };
