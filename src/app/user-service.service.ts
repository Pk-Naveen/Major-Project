import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Administration } from './home/ip-list/ip-list.component';
import { auditList, ipallocation } from './auditlist';
import { requestip } from './users';

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
  list1:auditList = new auditList();
  list2:ipallocation=new ipallocation();


  displayedColumnsservice: string[];

  // auditSert:auditList[]=[];




setvaluesforaudit(empID:any,name:any,department:any,deviceType:any)
{
  this.list1.empId=empID;
  this.list1.name=name;
  this.list1.department=department;
  this.list1.deviceType=deviceType;

  this.list2.empID=empID;
  this.list2.name=name;
  this.list2.deviceType=deviceType;
  this.list2.department=department;
}

getvaluesforaudit()
{
   return this.http.get(this.adminurl+'requests/acceptedrequestsforauditlog')

}



setservice(displayedColumns: string[]){
  this.displayedColumnsservice=displayedColumns;
}

  getservice()
  {
    return this.displayedColumnsservice;
  }






  private loading: boolean = false
  constructor(private http:HttpClient) { }
  setLoading(loading: boolean) {
    this.loading = loading;
  }
  getLoading(): boolean {
    return this.loading;
  }
  // login usere here
  getUserData(username:any,password:any)
  {
    return this.http.get(this.userurl+this.login+'/'+username+'/'+password);  // change the port according to ur spring boot running por
  }
userRegistration(Name:any,UserName:any,Password:any,EmailAddress:any,EmpID:any)

  {

    return this.http.post(this.userurl+this.signup+'/'+Name+'/'+UserName+'/'+Password+'/'+EmailAddress+'/'+EmpID,{});

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

  getRequests()
  {
    return this.http.get("http://localhost:8000/admin/requests/allrequests")
  }

  requestacceptedbuadmin(empID:any,deviceType:any)
  {
    return this.http.post(this.adminurl+'requests/accepted/'+empID+'/'+deviceType,{})
  }

  extendIPvalues(department:any,value:number)
  {
    return this.http.put(this.adminurl+'ipextend/'+department+'/'+value,{});
  }

  // admin login here
  loginadmin(username:any,password:any)
  {
    return this.http.get(this.adminurl+this.login+'/'+username+'/'+password); 
  }

  userrequests(userrequest:requestip)
  {
    return this.http.post(this.userurl+'requests/save',userrequest,{responseType:'text' as 'json'});
  }

  ipforadministration(ipallot:ipallocation)
  {
    return this.http.post(this.adminurl+'administration/save',ipallot,{responseType:'text' as 'json'})
  }
  ipforprocurement(ipallot:ipallocation)
  {
    return this.http.post(this.adminurl+'procurement/save',{ipallot})
  }
  ipforsales(ipallot:ipallocation)
  {
    return this.http.post(this.adminurl+'sales/save',{ipallot})
  }
  ipformanufacturing(ipallot:ipallocation)
  {
    return this.http.post(this.adminurl+'manufacturing/save',{ipallot})
  }
  ipforextradevices(ipallot:ipallocation)
  {
    return this.http.post(this.adminurl+'extradevice/save',{ipallot})
  }



  
}


