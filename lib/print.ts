import chalk from "chalk";
import { logger } from "./log";

function getPrefix() {
  return chalk.bold.bgMagentaBright(chalk.black("[CHAT CLI]")) + " ";
}
function getSuccess(message: string) {
  return chalk.bold.green(message);
}

function getInfo(message: string) {
  return chalk.bold.blue(message);
}

function success(message: string) {
  console.log(getPrefix() + getSuccess(message));
  logger.info(message);
}

function info(message: string) {
  console.log(getPrefix() + getInfo(message));
  logger.info(message);
}

function table(data: any) {
  console.table(data);
}

export const print = {
  table,
  success,
  info,
};
