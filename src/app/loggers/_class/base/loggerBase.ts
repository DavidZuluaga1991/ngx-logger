import { InjectionToken } from "@angular/core";

export const BaseLogger = new InjectionToken<LoggerBase>('LoggerBase');

export abstract class LoggerBase {

    constructor() {}

      /**
       * trace
       */
      public abstract trace(message: string): void
      /**
       * debug
       */
      public abstract debug(message: string): void
    
      /**
       * info
       */
      public abstract info(message: string): void
    
      /**
       * log
       */
      public abstract log(message: string): void
    
      /**
       * warn
       */
      public abstract warn(message: string): void
    
      /**
       * error
       */
      public abstract error(message: string): void

    
}