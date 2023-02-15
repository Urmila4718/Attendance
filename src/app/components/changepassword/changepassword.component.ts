import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
 ngOnInit(): void {}
 
 constructor(private authService : AuthService) {}
  isChangePass: boolean= false;
  displayMsg: string ='';
  confirmpass:string= 'none';
  emp_username : string = '';
  changepasswordForm = new FormGroup({
  oldpassword : new FormControl("", [Validators.required]),
  newpassword : new FormControl("",[Validators.required]),
  confirmpassword : new FormControl("",[Validators.required])
 });

 get Oldpassword() : FormControl
 {
  return this.changepasswordForm.get("oldpassword") as FormControl;
 }
 get Newpassword() : FormControl
 {
  return this.changepasswordForm.get("newpassword") as FormControl;
 }
 get Confirmpassword() : FormControl
 {
  return this.changepasswordForm.get("confirmpassword") as FormControl;
 }
  
 
 changepasswordSubmitted()
 {
  console.log(localStorage.getItem("username"));
  this.emp_username = localStorage.getItem("username")!;
  console.log(this.emp_username);
  if(this.Newpassword.value== this.Confirmpassword.value)
  {
    this.confirmpass ='none';
  }
  else
  {
    this.confirmpass='inline';
  }
  
  this.authService.ChangePasswordUser([
   this.changepasswordForm.value.oldpassword!,
   this.changepasswordForm.value.newpassword!,
   this.changepasswordForm.value.confirmpassword!,
   this.emp_username,
 
  ]).subscribe(res =>{
    if(res == 'Failure')
    {
      this.isChangePass = false;
      this.displayMsg = "Password is incorrect or something is wrong";
     
    }
    else if (res =='Sucess')
    {
      this.isChangePass = true;
      this.displayMsg = "Password changed sucessfully";
      this.changepasswordForm.reset();
    
    }
  });
 }

}
