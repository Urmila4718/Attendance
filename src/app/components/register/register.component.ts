import { Component,OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  displayMsg: string ='';
  isAccountCreated: boolean= false;

  constructor(private authService : AuthService) {}
  ngOnInit(): void {
  }
 
  registerForm = new FormGroup({
    firstname : new FormControl("",[Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-z].*')]),
    lastname : new FormControl("",[Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-z].*')]),
    ctc : new FormControl("",[Validators.required, Validators.minLength(2),Validators.maxLength(5),Validators.pattern('[0-9].*')]),
    designation : new FormControl("",[Validators.required, Validators.minLength(1), Validators.pattern('[a-zA-z].*')]),
    contactnumber : new FormControl("",[Validators.required, Validators.minLength(10),Validators.maxLength(11), Validators.pattern('[0-9].*')]),
    gender : new FormControl("",[Validators.required]),
    dob : new FormControl("",[Validators.required]),
  
  });
 
   
  
get FirstName() : FormControl{
  return this.registerForm.get("firstname") as FormControl;
}
get LastName() : FormControl{
  return this.registerForm.get("lastname") as FormControl;
}

get CTC() : FormControl{
  return this.registerForm.get("ctc") as FormControl;
}
get Designation() : FormControl{
  return this.registerForm.get("designation") as FormControl;
}
get ContactNumber() : FormControl{
  return this.registerForm.get("contactnumber") as FormControl;
}
get Gender() : FormControl{
  return this.registerForm.get("gender") as FormControl;
}
get DOB() : FormControl{
  return this.registerForm.get("dob") as FormControl;
}

regiterSubmitted(){
  console.log(this.registerForm.valid);
    this.authService.registerUser([
      this.registerForm.value.firstname!,
      this.registerForm.value.lastname!,
      this.registerForm.value.ctc!,
      this.registerForm.value.designation!,
      this.registerForm.value.contactnumber!,
      this.registerForm.value.gender!,
      this.registerForm.value.dob!
    ]).subscribe(res => {
      //console.log(res)
      if (res == 'Success'){
        this.displayMsg = "Account created successfully!";
        this.isAccountCreated =true;
        this.registerForm.reset();
 
       }
       else if (res == 'Exist')
       {
        this.displayMsg = "Account already exist!";
        this.isAccountCreated =false;
       }
       else 
       {
        this.displayMsg = "Something went wrong";
        this.isAccountCreated =false;
       }
    });
  }

}
