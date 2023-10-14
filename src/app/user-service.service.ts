import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Administration } from './home/ip-list/ip-list.component';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userurl:string='http://localhost:8000/user/'
  adminurl:string='http://localhost:8000/admin/'
  login:string='login'
  signup:string='signup'
  otp:string='otp'
  updateP:string='updateP'
  private loading: boolean = false
  constructor(private http:HttpClient) { }
  setLoading(loading: boolean) {
    this.loading = loading;
  }
  getLoading(): boolean {
    return this.loading;
  }
  getUserData(username:any,password:any)
  {
    return this.http.get(this.userurl+this.login+'/'+username+'/'+password);  // change the port according to ur spring boot running por
}
userRegistration(Name:any,UserName:any,Password:any,EmailAddress:any)

  {

    return this.http.post(this.userurl+this.signup+'/'+Name+'/'+UserName+'/'+Password+'/'+EmailAddress,{});

  }

  updatepassword(email:any,newpassword:any)
  {
    return this.http.put(this.userurl+this.updateP+'/'+newpassword+'/'+email,{})
  }

  sendOtp(email:any)
  {
    return this.http.get(this.userurl+this.otp+'/'+email)
  }

  getAdministration()
  {
    return this.http.get("http://localhost:8000/admin/administration/allIP")
  }
}
