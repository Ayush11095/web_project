import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { MustMatch } from 'src/app/validators/custom.validators';
import {ToastrService} from 'ngx-toastr'
import { AddService } from 'src/app/service/add.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  updateForm:FormGroup;
  flag:boolean=true
    id:string=this.cookie.get('id')
   f_name:string=this.cookie.get('firstname')
   l_name:string=this.cookie.get('lastname')
   e_mail:string=this.cookie.get('email')
   d={
    firstname:this.f_name,
    lastname:this.l_name,
    email:this.e_mail
   }
  _id:string
  submitted= false;
  constructor(
    private fb:FormBuilder, 
    private router:Router,
    private activate:ActivatedRoute, 
    private msg:ToastrService,
    private cookie:CookieService, 
    private addService:AddService) { 
      this._id=this.activate.snapshot.params["_id"];
      if (this._id==undefined) {
        this.flag=true;
      }else{
        this.flag=false;
      }
    }
    
  ngOnInit(): void {
    
    this.userForm=this.fb.group({
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(7)]],
      cpassword: ['', [Validators.required]]
    },{validator: MustMatch('password', 'cpassword')});
  //  alert(this.f_name) 
    this.updateForm=this.fb.group({
      fname:['',[Validators.required]],
      lname:['',[Validators.required]],
      mail: ['', [Validators.required, Validators.email]]
    });
  }
  
  get f() { return this.userForm.controls; }
  onRegister(userForm){
    this.submitted=true;
    if (this.userForm.invalid) {
      return this.msg.error('Fill all details');
    }else{
      var datas=userForm.value;
      var data = {
        firstname: datas.firstname,
        lastname: datas.lastname,
        email: datas.email,
        password:datas.password
      }
      // console.log(data);
      this.userAdd(data)
      // this.router.navigateByUrl('/dashboard/users');
    }
  }
  onUpdate(updateForm){
    alert(this.id)
    this.submitted=true;
    if (this.updateForm.invalid) {
      return this.msg.error('Fill all details');
    }else{
      var datas=updateForm.value;
      var data = {
        firstname: datas.fname,
        lastname: datas.lname,
        email: datas.mail
      }
      this.addService.updateUser(data,this.id).subscribe((res=>{
        if (res.success) {
          this.msg.success(res.message);
          this.router.navigateByUrl('/dashboard/users')  
        }else{
          this.msg.error(res.message);
        }
      }))
    }
  }
  userAdd(adddata){
    this.addService.addUser(adddata)
    .subscribe(res=>{
      this.msg.success(res.message);
      this.router.navigateByUrl('/dashboard/users');
      //alert(res.message);
    })
  }
  get fname() { return this.updateForm.get('fname'); }
  get lname() { return this.updateForm.get('lname'); }
  get mail() { return this.updateForm.get('mail'); } 
  get firstname() { return this.userForm.get('firstname'); }
  get lastname() { return this.userForm.get('lastname'); }
  get email() { return this.userForm.get('email'); }
  get password() { return this.userForm.get('password'); }
  get cpassword() { return this.userForm.get('cpassword'); }
}
