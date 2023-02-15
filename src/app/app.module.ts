import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LeaveComponent } from './components/leave/leave.component';
import { ReportComponent } from './components/report/report.component';
import { GeneratedReportComponent } from './components/generated-report/generated-report.component';
import { CheckinComponent } from './components/checkin/checkin.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
 
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ChangepasswordComponent,
    PageNotFoundComponent,
    DashboardComponent,
    LeaveComponent,
    ReportComponent,
    GeneratedReportComponent,
    CheckinComponent,
    CheckoutComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AgGridModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
