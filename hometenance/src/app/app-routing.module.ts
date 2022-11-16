import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdmincallComponent } from './admincall/admincall.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AprofileComponent } from './aprofile/aprofile.component';
import { Aprofile1Component } from './aprofile1/aprofile1.component';
import { BookComponent } from './book/book.component';
import { BookedComponent } from './booked/booked.component';
import { FindComponent } from './find/find.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { Login1Component } from './login1/login1.component';
import { RegisterComponent } from './register/register.component';
import { Register1Component } from './register1/register1.component';
import { Home1Component } from './services/home1/home1.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'home1',component:Home1Component},
  {path:'register1',component:Register1Component},
  {path:'login1',component:Login1Component},
  {path:'aprofile',component:AprofileComponent},
  {path:'find',component:FindComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'admin',component:AdminComponent},
  {path:'aprofile1',component:Aprofile1Component},
  {path:'book',component:BookComponent},
  {path:'booked',component:BookedComponent},
  {path:'admincall',component:AdmincallComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
