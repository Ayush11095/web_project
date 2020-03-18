import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private http:HttpClient) { }
  getUser(): Observable<any> {
    return this.http.get('http://localhost:5000/user/list');
  }
  getUserById(_id): Observable<any> {
    return this.http.get('http://localhost:5000/user/'+_id);
  }
  getProduct(): Observable<any> {
    return this.http.get('http://localhost:5000/product/list');
  }
  addUser(data): Observable<any> {
    return this.http.post('http://localhost:5000/user',data);
  }
  updateUser(data,id): Observable<any> {
    return this.http.put('http://localhost:5000/user/'+id,data);
  }
  addProduct(data): Observable<any> {
    return this.http.post('http://localhost:5000/product',data);
  }
  updateProduct(data,id): Observable<any> {
    return this.http.put('http://localhost:5000/product/'+id,data);
  }
  userLogin(data): Observable<any>{
    return this.http.post('http://localhost:5000/user/login',data);
  }
  userDel(_id): Observable<any>{
    return this.http.delete('http://localhost:5000/user/'+_id);
  }
  productDel(_id): Observable<any>{
    return this.http.delete('http://localhost:5000/product/'+_id)
  }
  getProductById(_id): Observable<any> {
    return this.http.get('http://localhost:5000/product/'+_id);
  }
}
