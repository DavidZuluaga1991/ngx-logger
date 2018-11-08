import { NGXLogger } from "ngx-logger";
import { LoggerBase } from "./base/loggerBase";

export function loggerFuntion(ngxlog: NGXLogger, logg?: LoggerBase) {
  return (logg != null && logg != undefined) ? logg : new AutoLogger(ngxlog)
}

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
