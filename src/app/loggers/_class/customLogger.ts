import { Injectable } from "@angular/core";
import { LoggerBase,BaseLogger } from "./base/loggerBase";

export const AutoLoggerBase = BaseLogger;

@Injectable()
export class CustomerLogger extends LoggerBase {
  constructor() {
    super();
  }
  /**
   * trace
   */
  public trace(message: string) {
    console.log('trace '+message);
  }
  /**
   * debug
   */
  public debug(message: string) {
    console.log('debug '+message);
  }

  /**
   * info
   */
  public info(message: string) {
    console.log('info '+message);
  }

  /**
   * log
   */
  public log(message: string) {
    console.log('log '+message);
  }

  /**
   * warn
   */
  public warn(message: string) {
    console.log('warn '+message);
  }

  /**
   * error
   */
  public error(message: string) {
    console.log('error '+message);
  }
}
