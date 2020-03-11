import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashbordComponent}  from './dashbord.component'
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{path:'',component:DashbordComponent},
{path:'products',component:ProductsComponent},
{path:'users',component:UserComponent},
{path:'profile',component:ProfileComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
