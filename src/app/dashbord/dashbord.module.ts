import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { DashbordComponent } from './dashbord.component';


@NgModule({
  declarations: [HeaderComponent, BodyComponent, FooterComponent, DashbordComponent],
  imports: [
    CommonModule,
    DashbordRoutingModule
  ]
})
export class DashbordModule { }
