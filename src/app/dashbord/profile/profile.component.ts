import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
public name:string
public mail:string
  constructor(
    private cookie:CookieService) { }
  ngOnInit(): void {
    this.name = this.cookie.get('name')
    this.mail = this.cookie.get('mail')
    // alert(cvalue)
  }
  
}
