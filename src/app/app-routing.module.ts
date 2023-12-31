import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignInComponent } from './login-page/sign-in/sign-in.component';
import { SignUpComponent } from './login-page/sign-up/sign-up.component';
import { ForgetPassComponent } from './login-page/forget-pass/forget-pass.component';
import { OtpComponent } from './login-page/otp/otp.component';
import { NewPassComponent } from './login-page/new-pass/new-pass.component';
import { HomeComponent } from './home/home.component';
import { RequestsComponent } from './home/requests/requests.component';
import { AuditLogComponent } from './home/audit-log/audit-log.component';
import { ExtendIpsComponent } from './home/extend-ips/extend-ips.component';
import { IpListComponent } from './home/ip-list/ip-list.component';
import { UsersComponent } from './users/users.component';
import { IpRequestComponent } from './users/ip-request/ip-request.component';
import { MyIpListComponent } from './users/my-ip-list/my-ip-list.component';
import { OverviewComponent } from './home/overview/overview.component';
import { UseroverviewComponent } from './users/useroverview/useroverview.component';
import { AdminstrationComponent } from './home/ip-list/adminstration/adminstration.component';
import { ManufacturingComponent } from './home/ip-list/manufacturing/manufacturing.component';
import { ProcurementComponent } from './home/ip-list/procurement/procurement.component';
import { SalesComponent } from './home/ip-list/sales/sales.component';

const routes: Routes = [
  {path:'', redirectTo:'landingPage', pathMatch:'full'},
  {path:'userPage',component:UsersComponent,
  children:[
    {path:'',redirectTo: 'userOverview', pathMatch: 'full'},
    {path:'ipRequest', component: IpRequestComponent},
    {path:'myIpList', component: MyIpListComponent},
    {path:'userOverview', component: UseroverviewComponent},
  ]
},
  {path:'homePage', component:HomeComponent,
children:[
  {path:'', redirectTo:'overview', pathMatch:'full'},
  {path:'requests',component: RequestsComponent},
  {path:'auditLog',component: AuditLogComponent},
  {path:'extendIps',component: ExtendIpsComponent},
  {path:'ipList',component: IpListComponent,
  children:[
    {path:'administration',component: AdminstrationComponent},
    {path:'manufacturing',component: ManufacturingComponent},
    {path:'procurement',component: ProcurementComponent},
    {path:'sales',component: SalesComponent},
  ]  
},
  {path:'overview',component:OverviewComponent}
] },
  {component:LoginPageComponent,path:"Login",
  children:[
    {path:'',redirectTo:'signIn',pathMatch:'full'},
    {path:'signIn', component: SignInComponent },
    {path:'signUp', component: SignUpComponent },
    {path:'forgotPass', component: ForgetPassComponent},
    {path: 'otp', component: OtpComponent},
    {path: 'newPass', component: NewPassComponent},
  ]},
  {path:'landingPage', component:LandingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
