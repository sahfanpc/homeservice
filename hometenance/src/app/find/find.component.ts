import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
 array:any
 testbutton:boolean=false
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:3003/profile").subscribe((result:any)=>{
      if(result){
        this.array=result
      }
     })
  }
button(id:any){
this.testbutton=true
localStorage.setItem('name12',JSON.stringify(id.name))
localStorage.setItem('proffetion12',JSON.stringify(id.proffetion))
}
no(){
  this.testbutton=false
}
yes(){
  this.testbutton=false
 var name12=JSON.parse(localStorage.getItem('name12')||'')
 var proffetion12=JSON.parse(localStorage.getItem('proffetion12')||'')
 this.http.delete("http://localhost:3003/profile/"+name12+"/"+proffetion12).subscribe((result:any)=>{
      if(result){
        this.array=result
      }
     })
}
}
