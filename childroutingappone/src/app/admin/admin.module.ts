import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminoneComponent } from './adminone/adminone.component';
import { AdmintwoComponent } from './admintwo/admintwo.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { RouterModule, Routes } from '@angular/router';

var childAdminroute:Routes = [
{path:"",component:AdminhomeComponent,children:[
  {path:"one",component:AdminoneComponent},
  {path:"two",component:AdmintwoComponent}  
]}
];

@NgModule({
  declarations: [
    AdminoneComponent,
    AdmintwoComponent,
    AdminhomeComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(childAdminroute)
  ],
  exports:[
    RouterModule
  ]
})
export class AdminModule { }
