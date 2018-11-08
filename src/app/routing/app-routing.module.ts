import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggersComponent } from './../loggers/loggers.component';
import { LazyloadingComponent } from './../lazyloading/lazyloading.component';

const appRoutes: Routes = [
  {
    path: 'logger',
    component: LoggersComponent
  },
  {
    path: 'lazyload',
    component: LazyloadingComponent
  },
  {
    path:'**',
    redirectTo: 'logger',
    pathMatch: 'full'
  }
];

export const routedComponents = [
  LoggersComponent,
  LazyloadingComponent
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{ useHash: true })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }