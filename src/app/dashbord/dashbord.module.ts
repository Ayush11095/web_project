import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { DashbordComponent } from './dashbord.component';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HeaderComponent, BodyComponent, FooterComponent, DashbordComponent, UserComponent, ProductsComponent, ProfileComponent, AddUserComponent, AddProductComponent],
  imports: [
    CommonModule,
    DashbordRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashbordModule { }
