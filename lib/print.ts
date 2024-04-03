import chalk from "chalk";

function getPrefix() {
  return chalk.bold.bgMagentaBright(chalk.black("[CHAT CLI]")) + " ";
}
function getSuccess(message: string) {
  return chalk.bold.green(message);
}

function success(message: string) {
  console.log(getPrefix() + getSuccess(message));
}

function table(data: any) {
  console.table(data);
}

export const print = {
  table,
  success,
};
