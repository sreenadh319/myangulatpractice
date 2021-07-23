import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';

var obj:Routes = [
{path:'hm',component:HomeComponent},
{path:'c1',component:C1Component},
{path:'c2',component:C2Component}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    C1Component,
    C2Component
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(obj)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
