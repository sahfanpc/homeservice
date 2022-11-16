import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  adminloginform=this.fb.group({
    email1:['',[Validators.required]],
    password1:['',[Validators.required]]
  })
  constructor(private router:Router,private db:DatabaseService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
login(){
  var email=this.adminloginform.value.email1
  var password=this.adminloginform.value.password1
  if(email==''||password==''){
    alert("please fill")
  }else{
    if(this.adminloginform.valid){
this.db.adminLogin(email,password).subscribe((result:any)=>{
if(result){
alert(result.message)
this.router.navigateByUrl('admin')
}
},(result)=>{
alert(result.error.message)
})
    }else{
      alert("invalid")
    }
  }
}

}
