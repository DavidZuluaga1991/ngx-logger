import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(appRoutes),CommonModule],
  exports: [RouterModule],
  declarations: [HomeComponent]
})
/*@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})*/
export class HomeRoutingModule { }
