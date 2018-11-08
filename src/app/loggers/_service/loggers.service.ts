import { Injectable, InjectionToken, Inject } from '@angular/core';
import { LoggerBase } from '../_class/base/loggerBase';

export const BaseLoggerProvider = new InjectionToken<LoggerBase>('LoggerBase');

@Injectable({
  providedIn: 'root'
})
export class LoggersService {

  constructor(@Inject(BaseLoggerProvider) readonly looger) { }

  getLogger(){
    this.looger.trace('trace');
    this.looger.debug('debug');
    this.looger.info('info');
    this.looger.log('log');
    this.looger.warn('warn');
    this.looger.error('error');
  }
}
