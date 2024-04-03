#!/usr/bin/env tsx

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { print } from "../lib/print";
import { getConfig } from "../lib/config";

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
        console.log(yargs.values);
        return;
      }
    },
  )
  .parse();
