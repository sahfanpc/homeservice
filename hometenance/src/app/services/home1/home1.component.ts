import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
 sahfan:any
 array:any
 testbutton:boolean=false
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {

  }
  button(){
    this.testbutton=true
    console.log(this.sahfan)
    localStorage.setItem('sn',JSON.stringify(this.sahfan))
 var sn=JSON.parse(localStorage.getItem('sn')||'')
 this.http.get("http://localhost:3003/profile/"+sn).subscribe((result:any)=>{
  if(result){
    this.array=result
  }
 })
  }
button1(id:any){
  console.log(id.name)
  localStorage.setItem('name',JSON.stringify(id.name))
  localStorage.setItem('condact',JSON.stringify(id.condact))
  localStorage.setItem('city',JSON.stringify(id.city))
  localStorage.setItem('discription',JSON.stringify(id.add))
  localStorage.setItem('proffetion',JSON.stringify(id.proffetion))
this.router.navigateByUrl('book')
}
}
