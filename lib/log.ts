import { createLogger, transports, format } from "winston";
import { LOG_PATH } from "./path";
import { createReadStream, existsSync } from "fs";

export const logger = createLogger({
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.printf(
      (i) => `[${i.level.toUpperCase()}][${i.timestamp}] - ${i.message}`,
    ),
  ),
  transports: [
    new transports.File({
      filename: LOG_PATH,
      maxsize: 1024 * 1024 * 10,
      maxFiles: 1,
    }),
  ],
});

export function viewLogs() {
  if (!existsSync(LOG_PATH)) {
    console.log("empty logs");
    return;
  }

  const strams = createReadStream(LOG_PATH);
  strams.pipe(process.stdout);
}
