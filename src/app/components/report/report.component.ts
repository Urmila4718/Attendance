import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit{
  ngOnInit(): void {
  }
 
 constructor(private authService: AuthService, private router:Router) {}
  
 emp_username : string = '';
  reportForm = new FormGroup({
    username : new FormControl()
 });

isreportSubmitted(){
  this.authService.ReportUser([
    this.reportForm.value.username!,
  
   ]).subscribe(res =>{
    console.log(res);
    if (res=='NOT FOUND')
    {
      alert("Not Found any details!");
      this.router.navigateByUrl("dashboard");
    }
    this.router.navigate(['generated_report'], {
      queryParams :{data:res}
    });
 
    
   });
}
}
