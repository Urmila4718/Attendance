import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent  implements OnInit {
  ngOnInit(): void {
  }


constructor(private authService:AuthService, private router:Router) {}
  isleaveApplied: boolean = false;
  displayMsg: string ='';
  emp_username : string = '';
  leaveForm = new FormGroup({
  reason : new FormControl(),
  date : new FormControl(),
  type: new FormControl()
});
 get Reason(): FormControl{
  return this.leaveForm.get("reason") as FormControl;
 }
 get Date(): FormControl{
  return this.leaveForm.get("date") as FormControl;
 }
 get Type(): FormControl{
  return this.leaveForm.get("type") as FormControl;
 }
isleaveSubmitted()
{
  console.log(this.leaveForm.value);
  this.emp_username = this.authService.getusername();

  this.authService.LeaveUser([
    this.leaveForm.value.reason!,
    this.leaveForm.value.date!,
    this.leaveForm.value.type!,
    this.emp_username!
  ]).subscribe(res => {
   
    if (res =='Failure')
    {
      this.displayMsg = "Leave not applied";
      this.isleaveApplied = false;
    }
    else if (res == 'Success')
    {
      this.displayMsg = "Leave applied";
      this.isleaveApplied = true;
      this.leaveForm.reset();
    }
});


}
}