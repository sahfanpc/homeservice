import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { Home1Component } from './services/home1/home1.component';
import { NavbarComponent } from './services/navbar/navbar.component';
import { Register1Component } from './register1/register1.component';
import { Login1Component } from './login1/login1.component';
import { AprofileComponent } from './aprofile/aprofile.component';
import { FindComponent } from './find/find.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { Aprofile1Component } from './aprofile1/aprofile1.component';
import { BookComponent } from './book/book.component';
import { BookedComponent } from './booked/booked.component';
import { AdmincallComponent } from './admincall/admincall.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    Home1Component,
    NavbarComponent,
    Register1Component,
    Login1Component,
    AprofileComponent,
    FindComponent,
    AdminComponent,
    AdminloginComponent,
    Navbar2Component,
    Aprofile1Component,
    BookComponent,
    BookedComponent,
    AdmincallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
