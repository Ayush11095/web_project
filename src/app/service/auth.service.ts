import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  constructor(private route:Router) { }
  canActivate(){ 
    if (localStorage.getItem('')) {
      return true
    } else{
      this.route.navigateByUrl('');
      return false
    }
    }
  
}
