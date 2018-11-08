import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HeaderComponent } from './header/header.component';
import { AppRoutingModule,routedComponents } from './routing/app-routing.module';
import { LoggersModule } from './loggers/loggers.module';
import { CustomerLogger } from './loggers/_class/customLogger';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSelectModule,
  MatOptionModule,
  MatFormFieldModule
} from '@angular/material';
import { NgxLoggerLevel } from 'ngx-logger';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routedComponents
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    AppRoutingModule,
    LoggersModule.forRoot(
      { level: NgxLoggerLevel.DEBUG },
      //new CustomerLogger()
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
