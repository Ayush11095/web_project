import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './service/auth.service';

const routes: Routes = [{path:'login', loadChildren:()=>(import('./login/login.module').then(m=>m.LoginModule))},
{path:'signup', loadChildren:()=>(import('./signup/signup.module').then(m=>m.SignupModule))},
{path:'dashboard', loadChildren:()=>(import('./dashbord/dashbord.module').then(m=>m.DashbordModule))},
{path:'', loadChildren:()=>(import('./home/home.module').then(m=>m.HomeModule))}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }