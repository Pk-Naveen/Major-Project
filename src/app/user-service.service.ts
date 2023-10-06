import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseurl:string='http://localhost:8000/user/'
  login:string='login'
  signup:string='signup'
  otp:string='otp'
  updateP:string='updateP'
  constructor(private http:HttpClient) { }
  getUserData(username:any,password:any)
  {
    return this.http.get(this.baseurl+this.login+'/'+username+'/'+password);  // change the port according to ur spring boot running por
}
userRegistration(Name:any,UserName:any,Password:any,EmailAddress:any)

  {

    return this.http.post(this.baseurl+this.signup+'/'+Name+'/'+UserName+'/'+Password+'/'+EmailAddress,{});

  }

  updatepassword(email:any,newpassword:any)
  {
    return this.http.put(this.baseurl+this.updateP+'/'+newpassword+'/'+email,{})
  }

  sendOtp(email:any)
  {
    return this.http.get(this.baseurl+this.otp+'/'+email)
  }
}
