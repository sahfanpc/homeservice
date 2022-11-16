import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform=this.fb.group({
    username1:['',[Validators.required]],
    email1:['',[Validators.required]],
    password1:['',[Validators.required]],
    place1:['',[Validators.required]],
    district1:['',[Validators.required]]
  })

  constructor(private router:Router,private db:DatabaseService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
    var username:any=this.registerform.value.username1
    var email:any=this.registerform.value.email1
    var password:any=this.registerform.value.password1
    var place:any=this.registerform.value.place1
    var district:any=this.registerform.value.district1
  
    if(username ==''||email ==''||password==''||place==''||district==''){
      alert("please fill")
    }else{
     if(this.registerform.valid){
        this.db.Register(username,email,password,place,district).subscribe((result:any)=>{
          if(result){
            
           alert(result.message)
           this.router.navigateByUrl('login')
          }
        },(result)=>{
          alert(result.error.message)
        })
      }else{
        alert('invalid')
      }
      }
    }
  
  
}
