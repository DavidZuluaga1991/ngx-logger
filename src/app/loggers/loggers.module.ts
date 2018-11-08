import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerBase } from './_class/base/loggerBase';
import { AutoLogger } from './_class/autoLogger';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

export const BaseLogger = new InjectionToken<LoggerBase>('LoggerBase');

@NgModule({
  imports: [
    CommonModule,
    LoggerModule.forRoot({ level: NgxLoggerLevel.DEBUG }),
  ],
  declarations: []
})
export class LoggersModule { }
