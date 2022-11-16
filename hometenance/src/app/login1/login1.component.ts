import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {
  loginsform=this.fb.group({
    number1:['',[Validators.required]],
    password1:['',[Validators.required]]

  })
  constructor(private router:Router,private db:DatabaseService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
log(){
  var condact:any=this.loginsform.value.number1
  var password:any=this.loginsform.value.password1
  if( condact ==''|| password =='') {
    alert("please fill")
  }else{
  if(this.loginsform.valid){
    this.db.Login1(condact,password).subscribe((result:any)=>{
      if(result){
       alert(result.message)
       localStorage.setItem(('cnt1'),JSON.stringify(condact))
       localStorage.setItem(('psd1'),JSON.stringify(password))
       this.router.navigateByUrl('aprofile1')
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

