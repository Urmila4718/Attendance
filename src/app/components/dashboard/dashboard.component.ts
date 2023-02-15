import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 

  ngOnInit(): void {
  }
    
    constructor(private authService:AuthService, private router:Router,@Inject(DOCUMENT) document: Document) {}
    emp_username = this.authService.getusername();
    login_date = localStorage.getItem("login_datetime");
    Checkin = localStorage.getItem("Checkin");
    Checkout = localStorage.getItem("Checkout");
   
    
     isLogout(){
      this.authService.removeToken();
      this.authService.removeUsername();
      this.router.navigateByUrl("/login");
      
     }
     ischeckin(){
      
      this.authService.CheckinUser([this.emp_username])
      .subscribe(res =>{
        localStorage.setItem("Checkin", "1");
        alert("1");
        console.log(res);
        this.router.navigateByUrl("dashboard");

       });
       
    }
    ischeckout(){
      this.emp_username = this.authService.getusername();
      if (this.Checkin!=null)
      {
        this.authService.CheckoutUser([this.emp_username])
        .subscribe(res =>{
          // localStorage.removeItem("Checkin");
          console.log(res);
          this.router.navigateByUrl("dashboard");
          localStorage.setItem("Checkout", "1");
          localStorage.removeItem("Checkin");
        });
      }
      else{
        alert("First Checkin!");
      this.router.navigateByUrl("dashboard");
      }
      
      
        
       
       
    }
    
}
