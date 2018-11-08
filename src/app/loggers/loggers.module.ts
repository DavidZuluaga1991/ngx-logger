import { NgModule, InjectionToken,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerBase } from './_class/base/loggerBase';
import { loggerFuntion } from './_class/autoLogger';
import { LoggerModule, NgxLoggerLevel,NGXLogger, LoggerConfig } from 'ngx-logger';
import { LoggersService, BaseLoggerProvider } from './_service/loggers.service';

export const BaseLogger = new InjectionToken<LoggerBase>('LoggerBase');

@NgModule({
  imports: [
    CommonModule,
    LoggerModule.forRoot({ level: NgxLoggerLevel.DEBUG }),
  ],
  declarations: []
})
export class LoggersModule { 
  static forRoot( logConfig?: LoggerConfig, logg?: LoggerBase ): ModuleWithProviders {
    return {
      ngModule: LoggerModule,
      providers: [ 
        LoggersService,
        {
          provide:BaseLoggerProvider,
          deps: [NGXLogger,BaseLogger],
          useFactory: loggerFuntion
        },
        {
          provide: BaseLogger,
          useValue: logg
        },
        {
          provide: LoggerConfig,
          useValue: logConfig
        }
      ]
    };
  }
}
