import { LoggerBase } from "./base/loggerBase";

export class CustomerLogger extends LoggerBase {
  constructor() {
    super();
  }
  /**
   * trace
   */
  public trace(message: string) {
    console.log('customer '+message);
  }
  /**
   * debug
   */
  public debug(message: string) {
    console.log('customer '+message);
  }

  /**
   * info
   */
  public info(message: string) {
    console.log('customer '+message);
  }

  /**
   * log
   */
  public log(message: string) {
    console.log('customer '+message);
  }

  /**
   * warn
   */
  public warn(message: string) {
    console.log('customer '+message);
  }

  /**
   * error
   */
  public error(message: string) {
    console.log('customer '+message);
  }
}
