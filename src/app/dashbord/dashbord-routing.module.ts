import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { BodyComponent } from './body/body.component'
import {DashbordComponent}  from './dashbord.component'

const routes: Routes = [{
  path:'',component:DashbordComponent
},
{
  path:'',component:HeaderComponent
},
{
  path:'',component:FooterComponent
},
{
  path:'',component:BodyComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
