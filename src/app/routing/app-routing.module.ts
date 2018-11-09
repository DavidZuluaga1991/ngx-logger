import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: './../home/_routing/home-routing.module#HomeRoutingModule'
  },
  {
    path: 'loggers',
    loadChildren: './../loggers/_routing/loggers-routing.module#LoggersRoutingModule'
  },
  {
    path: 'lazyload',
    loadChildren: './../lazyloading/_routing/lazyloading-routing.module#LazyloadingRoutingModule'
  },
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{ useHash: true })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }