import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyloadingComponent } from '../lazyloading.component';

const appRoutes: Routes = [
  {
    path: 'lazyloading',
    component: LazyloadingComponent
  },
  {
    path:'**',
    redirectTo: 'lazyloading',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
  declarations: [LazyloadingComponent]
})
export class LazyloadingRoutingModule { }

