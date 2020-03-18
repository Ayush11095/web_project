import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AddService } from '../service/add.service'
import { from } from 'rxjs';
import { AddService } from '../service/add.service';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
// import { IncomingMessage } from 'http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  forgetForm: FormGroup;
  submitted = false;
  users=[];
  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private addservice: AddService,
    private msg: ToastrService,
    private cookie:CookieService
    ) { }
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7)]]
    });
  }
  onLogIn() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return alert('Fill all credentials.');
    } else {
      var log= this.loginForm.value;
        var data={
        email:log.email,
        password:log.password
      }
      var mail=data.email
      // this.addservice.userLogin(data)
      // .subscribe(res => {
      //   console.log(res)
      // })
      this.addservice.userLogin(data)
      .subscribe(res=>{
        // this.msg.success(res.message);
        if(res.success){
          this.msg.success(res.message);
          this.cookie.set('mail',mail)
          this.cookie.set('name',res.name)
          this.router.navigateByUrl('/dashboard');
        }else{
          console.log(res.success)
          this.msg.error(res.message);
        }
      })
    }
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
   
  // myUser = () => {
  // this.addService.userLogin().subscribe(
  //   (res) => {
  //     console.log(res);
  //     this.users = res;});
  // }
}
