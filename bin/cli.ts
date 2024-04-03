#!/usr/bin/env tsx

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { print } from "../lib/print";
import { getConfig, setConfig } from "../lib/config";
import { splitFirstEqual } from "../lib/util.js";
import { logger, viewLogs } from "../lib/log";

yargs(hideBin(process.argv))
  .command(
    "config <action> [values]",
    "config status",
    (yargs) => {
      return yargs
        .positional("action", {
          type: "string",
          describe: "config action",
          choices: ["ls", "set"],
        })
        .positional("values", {
          describe: "config set values",
          default: "",
          type: "string",
        });
    },
    (yargs) => {
      if (yargs.action === "ls") {
        print.table(getConfig());
        return;
      }

      if (yargs.action === "set") {
        const [key, value] = splitFirstEqual(yargs.values);
        setConfig(key as any, value);
        print.success(`config updated: [${key}] [${value}]`);
        return;
      }
    },
  )
  .command("log", "show log", {}, viewLogs)
  .command("start", "start chat", {}, (e) => {
    logger.error("test");
    logger.info("start chat");
  })
  .command("modify", "modify project config with chat", {}, (e) => {
    console.log("modify chat");
  })
  .parse();
