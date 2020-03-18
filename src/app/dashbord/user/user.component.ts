import { Component, OnInit } from '@angular/core';
import { AddService } from '../../service/add.service'
import { from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user=[];
  constructor(private addUser:AddService,private route:Router,private msg:ToastrService,private cookie:CookieService) { }

  ngOnInit(): void {
    this.getUsers();
  }
getUsers=()=>{
  this.addUser.getUser().subscribe((res)=>{
    // console.log(res);
    this.user=res.result;
  })
}
getUserId=(_id)=>{
  this.addUser.getUserById(_id).subscribe((res)=>{
    this.user=res.data;
  })
}
upUser=(_id)=>{
  this.addUser.getUserById(_id).subscribe((res)=>{
    res.data
    // alert(test[0].firstname)
    this.cookie.set('id',_id)
    this.cookie.set('firstname',res.data[0].firstname)
    this.cookie.set('lastname',res.data[0].lastname)
    this.cookie.set('email',res.data[0].email)
    this.route.navigateByUrl('dashboard/add-user/'+_id);
  })
}
delUser(_id){
  this.addUser.userDel(_id).subscribe((res=>{
    this.msg.success(res.message);
    this.addUser.getUser().subscribe((res)=>{
      // console.log(res);
      this.user=res.result;
    })
  }))
}
}