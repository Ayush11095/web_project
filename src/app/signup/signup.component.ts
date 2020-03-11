import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ProfileComponent } from '../dashbord/profile/profile.component';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  profileForm: FormGroup;
  submitted= false;
  constructor(private fb:FormBuilder) { }
  ngOnInit(){
    this.profileForm=this.fb.group({
      name:['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.profileForm.controls; }
  // updateName(){
  //   this .name.setValue('Ayush');
  // }
onSubmit(){
  this.submitted=true
  console.warn(this.profileForm.value);
}

  get name() { return this.profileForm.get('name'); }

}
