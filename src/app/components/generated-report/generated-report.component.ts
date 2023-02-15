import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-generated-report',
  templateUrl: './generated-report.component.html',
  styleUrls: ['./generated-report.component.css']
})
export class GeneratedReportComponent {
  constructor(private router: ActivatedRoute) { }
  columnDefs = [
    {headerName: 'Emp_Name', field: 'emp_Name'},
    {headerName: 'Date', field: 'date'},
    {headerName: 'Checkin', field: 'login'},
    {headerName: 'Checkout', field: 'logout'},
    {headerName: 'Totallogs', field: 'totalhours'},
    {headerName: 'Status', field: 'status'}


];

rowData = [];
  data:any;
  ngOnInit(): void {
    this.router.queryParams.subscribe((params:any)=>{
      console.log(params);
      this.data = JSON.stringify(JSON.parse(params.data));
      this.rowData = JSON.parse(this.data);
      console.log(this.rowData);   

    })
  }


  


}
