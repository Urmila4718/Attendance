import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  //send http req to backend

  currentUser: BehaviorSubject<any> = new BehaviorSubject(null);
  baseServerUrl="http://localhost:5228/";
  jwtHelperService = new JwtHelperService();

  registerUser(register : Array<string>)
  {
   return this.http.post(this.baseServerUrl + "Employee/Registration",
   {
    Firstname : register[0],
    Lastname : register[1],
    Ctc  : register[2],
    Designation : register[3],
    ContactNumber : register[4],
    Gender  : register[5],
    DOB  : register[6],
   }, 
   {responseType : 'text'});
  }

  loginUser(login : Array<string>)
  {
    return this.http.post(this.baseServerUrl + "Employee/Login",
    {
      Username : login[0],
      Password : login[1],
    },
    {responseType:'text'})
  }
  
  ChangePasswordUser(password : Array<string>)
  {
    return this.http.post(this.baseServerUrl + "Employee/PasswordChange",
    {
      Oldpassword : password[0],
      Newpassword : password[1],
      Confirmpassword: password[2],
      Emp_username : password[3],
    },
    {responseType:'text'})
  }
  LeaveUser(leave: Array<string>)
  {
    return this.http.post(this.baseServerUrl + "Employee/Leave",
    {
      Reason : leave[0],
      Date : leave[1],
      Type : leave[2],
      Emp_username : leave[3],
    },
    {responseType:'text'})
  }
  ReportUser(report: Array<string>)
  {
    return this.http.post(this.baseServerUrl + "Employee/Report",
    {
      EmpName : report[0],
     
    },
    {responseType:'text'})
  }
  CheckinUser(checkin: Array<string>)
  {
    return this.http.post(this.baseServerUrl + "Employee/Checkin",
    {
      EmpName : checkin[0],
     
    },
    {responseType:'text'})
  }
  CheckoutUser(checkout: Array<string>)
  {
    return this.http.post(this.baseServerUrl + "Employee/Checkout",
    {
      EmpName : checkout[0],
     
    },
    {responseType:'text'})
  }
  setToken(token:string)
  {
  localStorage.setItem("access_token",token);
  this.loadCurrentUser();
  }
  setusername(username:string)
  {
  localStorage.setItem("username",username);
  }
  getusername()
  {
  return String(localStorage.getItem("username"));
  }
   loadCurrentUser()
   {
    const token = localStorage.getItem("access_token");
    const userInfo = token!=null ? this.jwtHelperService.
    decodeToken(token):null;
    console.log(userInfo);
    const data = userInfo?{
      id : userInfo.id,
      firstname : userInfo.firstname,
      lastname : userInfo.lastname,
      ctc: userInfo.ctc,
      designation: userInfo.designation,
      contactnumber:userInfo.contactnumber,
      gender: userInfo.gender,
      dob:userInfo.dob
    }: null;
    this.currentUser.next(data);
  }

  isloggedIn(): boolean
  {
    return localStorage.getItem("access_token")? true: false;
  }

  removeToken(){
    localStorage.removeItem("access_token");
    }
    removeUsername(){
      localStorage.removeItem("username");
      }
  
  }

