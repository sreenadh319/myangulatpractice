import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"hm",component:HomeComponent},
  {path:"c1/:name/:city",component:C1Component},
  {path:"c2/:name/:city",component:C2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
