import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggersComponent } from '../loggers.component';

const appRoutes: Routes = [
  {
    path: 'logger',
    component: LoggersComponent
  },
  /*{
    path:'**',
    redirectTo: 'logger',
    pathMatch: 'full'
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
  declarations: [LoggersComponent]
})
export class LoggersRoutingModule { }



