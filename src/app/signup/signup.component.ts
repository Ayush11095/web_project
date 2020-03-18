import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from '../validators/custom.validators';
import { ToastrService } from 'ngx-toastr';
import { AddService } from '../service/add.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userForm: FormGroup;
  submitted= false;
  constructor(private fb:FormBuilder, 
    private router:Router, 
    private msg:ToastrService, 
    private addService:AddService) { }
  ngOnInit(){
    this.userForm=this.fb.group({
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(7)]],
      cpassword: ['', [Validators.required]]
    },{validator: MustMatch('password', 'cpassword')});
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
  userAdd(adddata){
    this.addService.addUser(adddata)
    .subscribe(res=>{
      this.msg.success(res.message);
      this.router.navigateByUrl('/login');
      //alert(res.message);
    })
  }
  get firstname() { return this.userForm.get('firstname'); }
  get lastname() { return this.userForm.get('lastname'); }
  get email() { return this.userForm.get('email'); }
  get password() { return this.userForm.get('password'); }
  get cpassword() { return this.userForm.get('cpassword'); }
}
