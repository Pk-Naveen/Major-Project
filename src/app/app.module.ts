import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignInComponent } from './login-page/sign-in/sign-in.component';
import { SignUpComponent } from './login-page/sign-up/sign-up.component';
import { ForgetPassComponent } from './login-page/forget-pass/forget-pass.component';
import { OtpComponent } from './login-page/otp/otp.component';
import { NewPassComponent } from './login-page/new-pass/new-pass.component';
import { HomeComponent } from './home/home.component';
import { RequestsComponent } from './home/requests/requests.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatTableModule } from '@angular/material/table';
import {  MatPaginatorModule } from '@angular/material/paginator';
import {  MatButtonModule } from '@angular/material/button';
import { NgChartsModule } from 'ng2-charts';
import { AuditLogComponent } from './home/audit-log/audit-log.component';
import { ExtendIpsComponent } from './home/extend-ips/extend-ips.component';
import { IpListComponent } from './home/ip-list/ip-list.component';
import { IonicModule } from '@ionic/angular';
import { PreloaderComponent } from './preloader/preloader.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddEmployeeComponent } from './home/add-employee/add-employee.component';
import { UsersComponent } from './users/users.component';
import { IpRequestComponent } from './users/ip-request/ip-request.component';
import { MyIpListComponent } from './users/my-ip-list/my-ip-list.component';
import { OverviewComponent } from './home/overview/overview.component';
import { UseroverviewComponent } from './users/useroverview/useroverview.component';
import { AdminstrationComponent } from './home/ip-list/adminstration/adminstration.component';
import { ManufacturingComponent } from './home/ip-list/manufacturing/manufacturing.component';
import { ProcurementComponent } from './home/ip-list/procurement/procurement.component';
import { SalesComponent } from './home/ip-list/sales/sales.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LandingPageComponent,
    SignInComponent,
    SignUpComponent,
    ForgetPassComponent,
    OtpComponent,
    NewPassComponent,
    HomeComponent,
    RequestsComponent,
    ExtendIpsComponent,
    PreloaderComponent,
    AddEmployeeComponent,
    UsersComponent,
    IpRequestComponent,
    OverviewComponent,
    UseroverviewComponent,
    
    
    
  ],
  imports: [
    IpListComponent,
    MatSnackBarModule,
    SalesComponent,
    ProcurementComponent,
    ManufacturingComponent,
    AdminstrationComponent,
    MyIpListComponent,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserModule,
    AuditLogComponent,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgChartsModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
