import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { requestip } from 'src/app/users';

@Component({
  selector: 'app-ip-request',
  templateUrl: './ip-request.component.html',
  styleUrls: ['./ip-request.component.css'],
})
export class IpRequestComponent {
  requests:requestip=new requestip();
  public now:Date=new Date()
  empid:string;

  constructor(private ds:UserServiceService){
    this.empid=localStorage.getItem("empId")
  }

  selected(form){
    this.requests.name=localStorage.getItem('user')
    this.requests.department=form.value.department;
    this.requests.empID=form.value.empid;
    this.requests.deviceType=form.value.devicetype;
    // console.log((Date()).slice(0,24));
    this.requests.requestedTime=((Date()).slice(0,24).toString())
    //console.log(this.requests.requestedTime+this.requests.department+this.requests.name+this.requests.deviceType+this.requests.empID);
    console.log(this.requests);
    this.ds.userrequests(this.requests).subscribe((resp:any)=>
    {
      console.log(resp)
      if(resp=="request saved")
      {
        alert("Successfully Requested");
      }
      else if(resp=="Already Requested for that device")
      {
        alert("Sorry you can't request for this device it is already requested")
      }
    })
  }

  // sendrequest()
  // {
  //   this.ds.userrequests(this.requests).subscribe((resp:any)=>
  //   {
  //     console.log(resp)
  //     if(resp=="request saved")
  //     {
  //       alert("Successfully Requested");
  //     }
  //   })
  // }
    
  

}
