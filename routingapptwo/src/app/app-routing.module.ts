import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginguardGuard } from './loginguard.guard';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:"login",component:LoginComponent,canActivate:[LoginguardGuard]},
  {path:"hm",component:HomeComponent,canActivate:[AuthGuard]},
  {path:"logout",component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
