import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AddService } from 'src/app/service/add.service';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  updateProductForm:FormGroup;
  submitted= false;
   id:string;
   data;
   flag:boolean=true
  constructor(private fb:FormBuilder,
    private activate:ActivatedRoute, 
    private router:Router,
    private cookie:CookieService,
    private service:AddService,
    private msg:ToastrService
    ) { 
      this.id=this.activate.snapshot.params['id'];
      // alert(JSON.stringify(data))
      if (this.id==undefined) {
        this.flag=true
      }else{
      this.data={
          id:this.cookie.get('id'),
          pname:this.cookie.get('p_name'),
          pdesc:this.cookie.get('p_desc'),
          image:this.cookie.get('p_image')
        }
        this.flag=false
      }
    }

  ngOnInit(){
    this.productForm=this.fb.group({
      p_name:['',[Validators.required]],
      p_desc: ['', [Validators.required]],
      img: ['', [Validators.required]]
    });
    this.updateProductForm=this.fb.group({
      pname:['',[Validators.required]],
      pdesc: ['', [Validators.required]],
      image: ['', [Validators.required]]
    });
  }
  onAdd(productForm){
    this.submitted=true;
    if (this.productForm.invalid) {
      return this.msg.error('Fill all details');
    }else{
      var product=productForm.value;
      var data={
        p_name:product.p_name,
        p_desc:product.p_desc,
        p_image:product.img
      }
      this.service.addProduct(data).subscribe((res)=>{
        this.msg.success(res.message)
      })
      this.router.navigateByUrl('/dashboard/products');
    }
  }
  onUpdate(updateProductForm){
    this.submitted=true;
    if (this.updateProductForm.invalid) {
      return this.msg.error('Fill all details');
    }else{
      var product=updateProductForm.value;
      var data={
        p_name:product.pname,
        p_desc:product.pdesc,
        p_image:product.image
      }
      // let id
      this.service.updateProduct(data, this.id).subscribe((res)=>{
        this.msg.success(res.message)
      })
      this.router.navigateByUrl('/dashboard/products');
    }
  }
  get pname() { return this.updateProductForm.get('pname'); }
  get pdesc() { return this.updateProductForm.get('pdesc'); }
  get image() { return this.updateProductForm.get('image'); }
  get p_name() { return this.productForm.get('p_name'); }
  get p_desc() { return this.productForm.get('p_desc'); }
  get img() { return this.productForm.get('img'); }
}
