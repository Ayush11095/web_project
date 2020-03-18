import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashbordComponent}  from './dashbord.component'
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [{path:'',component:DashbordComponent},
{path:'products',component:ProductsComponent},
{path:'users',component:UserComponent},
{path:'profile',component:ProfileComponent},
{path:'add-user',component:AddUserComponent},
{path:'add-product',component:AddProductComponent},
{path:'add-product/:id',component:AddProductComponent},
{path:'add-user/:_id',component:AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
