import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserhomeComponent } from './userhome/userhome.component';
import { UseroneComponent } from './userone/userone.component';
import { UsertwoComponent } from './usertwo/usertwo.component';
import { RouterModule, Routes } from '@angular/router';

var childUserRoutes:Routes = [
  {path:"",component:UserhomeComponent,children:[
    {path:"one",component:UseroneComponent},
    {path:"two",component:UsertwoComponent}
  ]}
]


@NgModule({
  declarations: [
    UserhomeComponent,
    UseroneComponent,
    UsertwoComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(childUserRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class UserModule { }
