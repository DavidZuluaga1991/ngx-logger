import { Injectable } from "@angular/core";
import { NGXLogger } from "ngx-logger";
import { LoggerBase, BaseLogger } from "./base/loggerBase";

export const AutoLoggerBase = BaseLogger;

@Injectable()
export class AutoLogger extends LoggerBase {
  constructor(private logger: NGXLogger) {
    super();
  }
  /**
   * trace
   */
  public trace(message: string) {
    this.logger.trace(message);
  }
  /**
   * debug
   */
  public debug(message: string) {
    this.logger.debug(message);
  }

  /**
   * info
   */
  public info(message: string) {
    this.logger.info(message);
  }

  /**
   * log
   */
  public log(message: string) {
    this.logger.log(message);
  }

  /**
   * warn
   */
  public warn(message: string) {
    this.logger.warn(message);
  }

  /**
   * error
   */
  public error(message: string) {
    this.logger.error(message);
  }
}
