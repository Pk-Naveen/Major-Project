import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path:'', redirectTo:'landingPage', pathMatch:'full'},
  {component:LoginPageComponent,path:"Login"},
  {path:'landingPage', component:LandingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
