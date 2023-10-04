import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  getUserData(username:any,password:any)
  {
    return this.http.get('http://localhost:8010/user/'+username+'/'+password);  // change the port according to ur spring boot running port
  }

  userRegistration(Name:any,UserName:any,Password:any,EmailAddress:any)
  {
    return this.http.post(`http://localhost:8010/user/${Name}/${UserName}/${Password}/${EmailAddress}`,{});
  }
}
