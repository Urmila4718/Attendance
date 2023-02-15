import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, RequiredValidator, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  displayMsg: string ='';
  isLogin: boolean= false;
  constructor(private authService : AuthService,private router: Router) {}

 ngOnInit(): void {}
 

 loginForm = new FormGroup({
  username : new FormControl("",[Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-z].*')]),
  password : new FormControl("",[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')])
});


 get Username() : FormControl{
  return this.loginForm.get("username") as FormControl;
}
get Password() : FormControl{
  return this.loginForm.get("password") as FormControl;
}

loginSubmitted(){
  console.log(this.loginForm.valid);
  this.authService.loginUser([
    this.loginForm.value.username!,
    this.loginForm.value.password!,
  ]).subscribe(res => {
    if (res =='Failure')
    {
          // alert(res);

      this.displayMsg = "Login Unsuccessful!";
      this.isLogin = false;
    }
    else
    { 
      alert(this.loginForm.value.username);
      this.isLogin = true;
      this.authService.setToken(res);
      this.authService.setusername(String(this.loginForm.value.username));
      this.router.navigateByUrl("dashboard");
      this.displayMsg = "Login successful!";
      var date = new Date();

      var current_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      var current_time = date.getHours() + ":" + date.getMinutes();
      var date_time = current_date + " " + current_time;
      localStorage.setItem("login_datetime", date_time);
    }
  });
}

}
