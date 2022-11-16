import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aprofile1',
  templateUrl: './aprofile1.component.html',
  styleUrls: ['./aprofile1.component.css']
})
export class Aprofile1Component implements OnInit {
  array:any
  testbutton:boolean=false
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    var cnt=JSON.parse(localStorage.getItem('cnt1')||'')
    var psd=JSON.parse(localStorage.getItem('psd1')||'')
    console.log(cnt)
    console.log(psd)
    this.http.get("http://localhost:3003/profile1/"+cnt+"/"+psd).subscribe((result:any)=>{
      if(result){
        this.array=result
        console.log(this.array)
      }
     })
   }
   button(){
     this.testbutton=true
   }
 
 }

