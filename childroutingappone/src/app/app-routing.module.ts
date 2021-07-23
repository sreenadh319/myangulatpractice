import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"admin",loadChildren:()=>import("./admin/admin.module").then(dt=>dt.AdminModule)},
  {path:"user",loadChildren:()=>UserModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
