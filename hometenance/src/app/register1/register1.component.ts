
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.css']
})
export class Register1Component implements OnInit {
  registersform=this.fb.group({
    name1:['',[Validators.required]],
    number1:['',[Validators.required]],
    address1:['',[Validators.required]],
    address21:['',[Validators.required]],
    city1:['',[Validators.required]],
    dis1:['',[Validators.required]],
    password1:['',[Validators.required]],
    proffetion1:['',[Validators.required]]

  })
  
  constructor(private router:Router,private db:DatabaseService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
regis1(){
  var name:any=this.registersform.value.name1
  var address:any=this.registersform.value.address1
  var proffetion:any=this.registersform.value.proffetion1
  var add:any=this.registersform.value.dis1
  var address2:any=this.registersform.value.address21
  var city:any=this.registersform.value.city1
  var condact:any=this.registersform.value.number1
  var password:any=this.registersform.value.password1
  if(name ==''|| condact ==''|| address ==''|| city ==''|| add ==''|| password ==''||proffetion ==''|| address2 =='') {
    alert("please fill")
  }else{
  if(this.registersform.valid){
    this.db.Register1(name,address,proffetion,add,address2,city,condact,password).subscribe((result:any)=>{
      if(result){
       alert(result.message)
       localStorage.setItem(('cnt'),JSON.stringify(condact))
        localStorage.setItem(('psd'),JSON.stringify(password))
       this.router.navigateByUrl('aprofile')
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
