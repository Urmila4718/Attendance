import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { CheckinComponent } from './components/checkin/checkin.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GeneratedReportComponent } from './components/generated-report/generated-report.component';
import { LeaveComponent } from './components/leave/leave.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { ReportComponent } from './components/report/report.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
 
  {
    path : 'login',
    component : LoginComponent

  },
  {
    path : 'register',
    component : RegisterComponent

  },
  {
    path : 'dashboard',
    component : DashboardComponent,
    canActivate : [AuthGuard]

  },
  {
    path : 'changepassword',
    component : ChangepasswordComponent,
    canActivate : [AuthGuard]

  },
  {
    path : 'leave',
    component : LeaveComponent,
    canActivate : [AuthGuard]

  },
  {
    path : 'report',
    component : ReportComponent,
    canActivate : [AuthGuard]

  },
  {
    path : 'generated_report',
    component : GeneratedReportComponent,
    canActivate : [AuthGuard]

  },
  {
    path : 'checkin',
    component : CheckinComponent,
    canActivate : [AuthGuard]

  },
  {
    path : 'checkout',
    component : CheckoutComponent,
    canActivate : [AuthGuard]

  },
  {
    path : 'generated_report',
    component : GeneratedReportComponent,
    canActivate : [AuthGuard]

  },
  {
   path : '',
   redirectTo : 'login',
   pathMatch :"full"
  },
  {
    path : '**',
    component : PageNotFoundComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
