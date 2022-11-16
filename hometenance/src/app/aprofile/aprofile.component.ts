import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aprofile',
  templateUrl: './aprofile.component.html',
  styleUrls: ['./aprofile.component.css']
})
export class AprofileComponent implements OnInit {
array:any
testbutton:boolean=false
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    var cnt=JSON.parse(localStorage.getItem('cnt')||'')
    var psd=JSON.parse(localStorage.getItem('psd')||'')
    this.http.get("http://localhost:3003/profile/"+cnt+"/"+psd).subscribe((result:any)=>{
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
