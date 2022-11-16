import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admincall',
  templateUrl: './admincall.component.html',
  styleUrls: ['./admincall.component.css']
})
export class AdmincallComponent implements OnInit {
name:any
condact:any
proffetion:any
username:any
email:any
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.name=JSON.parse(localStorage.getItem('name')||'')
this.condact=JSON.parse(localStorage.getItem('condact')||'')
this.proffetion=JSON.parse(localStorage.getItem('proffetion')||'')
this.username=JSON.parse(localStorage.getItem('username')||'')
this.email=JSON.parse(localStorage.getItem('email')||'')

  }

}
