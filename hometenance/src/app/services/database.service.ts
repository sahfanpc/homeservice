import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private router:Router,private http:HttpClient) { }
  Register(username:any,email:any,password:any,place:any,district:any){
    const data={
       username,
       email,
       password,
       place,
       district
     }
     return this.http.post('http://localhost:3003/register',data)
   }
   Login(email:any,password:any){
    const data={
       email,
       password
     }
     return this.http.post('http://localhost:3003/login',data)
   }
   Register1(name:any,address:any,proffetion:any,add:any,address2:any,city:any,condact:any,password:any){
    const data={
      name,
      address,
      proffetion,
      add,
      address2,
      city,
      condact,
      password
    }
    return this.http.post('http://localhost:3003/profile1',data)
   }
   Login1(condact:any,password:any){
    const data={
      condact,
      password
    }
    return this.http.post('http://localhost:3003/profile11',data)
   }
   adminLogin(email:any,password:any){
    const data={
       email,
       password
     }
     return this.http.post('http://localhost:3003/adminlogin',data)
   }
}
