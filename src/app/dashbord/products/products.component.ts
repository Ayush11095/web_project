import { Component, OnInit } from '@angular/core';
import { AddService } from 'src/app/service/add.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
product=[]
  constructor(private route:Router,private cookie:CookieService,private msg:ToastrService,private getProducts:AddService) { }

  ngOnInit(): void {
    this.getProduct();
  }
getProduct=()=>{
  this.getProducts.getProduct().subscribe((res)=>{
    this.product=res.result
  })
}
getProductById=(_id)=>{
  this.getProducts.getProductById(_id).subscribe((res)=>{
    this.product=res.data
  })
}
upProductById=(_id)=>{
  this.getProducts.getProductById(_id).subscribe((res)=>{
    this.product=res.data
    this.cookie.set('id',res.data[0]._id)
    this.cookie.set('p_name',res.data[0].p_name)
    this.cookie.set('p_desc',res.data[0].p_desc)
    this.cookie.set('p_image',res.data[0].p_image)
    this.route.navigateByUrl('/dashboard/add-product/'+_id)
  })
}
delProduct(_id){
  this.getProducts.productDel(_id).subscribe((res=>{
    this.msg.success(res.message);
    this.getProducts.getProduct().subscribe((res)=>{
      // console.log(res);
      this.product=res.result;
    })
  }))
}
}