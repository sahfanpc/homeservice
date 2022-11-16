import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
name:any="JSON.parse(localStorage.getItem('name')||'')"
condact:any
city:any
discription:any
proffetion:any
  constructor(private router:Router) { }

  ngOnInit(): void {
this.name=JSON.parse(localStorage.getItem('name')||'')
console.log(this.name)
this.condact=JSON.parse(localStorage.getItem('condact')||'')
console.log(this.condact)
this.city=JSON.parse(localStorage.getItem('city')||'')
this.discription=JSON.parse(localStorage.getItem('discription')||'')
this.proffetion=JSON.parse(localStorage.getItem('proffetion')||'')
  }
remove(){
  this.router.navigateByUrl('home1')
}
book(){
  this.router.navigateByUrl('booked')
}
}
