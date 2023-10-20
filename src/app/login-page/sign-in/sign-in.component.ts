import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../login-page.component.css']
})
export class SignInComponent {
  getdata!:string      // changes made
  loaderStatus:string = "hide";
  isuser:any;
  isadmin:any;
  username:string;
  result:string;
  empiid:string;
  ddepartment:string;
  statusText: string="abs";
  statusClass:string = 'hidden';

  loaderAnimation(){
    this.loaderStatus = "show";
    setTimeout(
      () =>{
    this.loaderStatus = "hide";
      },4000 )
  }
  animatePopup(text:any){
    this.statusText = text
    this.statusClass = 'show';
    setTimeout(
      () => {
        this.statusClass = 'hidden'
      },3000
    )
  }

  constructor(private ds:UserServiceService, private router:Router){ }
  
  loginDataTransfer(form:any)
  {
    this.ds.getUserData(form.value.UserName,form.value.Password).subscribe((res:any)=>{
      console.log(res)
      this.getdata=res
      const slash=this.getdata.indexOf('/')
      this.result=this.getdata.slice(0,12)
      this.empiid=this.getdata.slice(12,19)
      this.username=this.getdata.slice(19,slash);
      this.ddepartment=this.getdata.slice(slash+1)
      if(this.result=="user present")
      {
        this.animatePopup("Login Successful")
        this.isuser=this.username;
        this.router.navigate(["/userPage"])
        localStorage.setItem("user",this.isuser)
        localStorage.setItem("empId",this.empiid)
        localStorage.setItem("department",this.ddepartment)
        // this.router.navigate({"/somecomponent"})
      }
      else
      {
        this.ds.loginadmin(form.value.UserName,form.value.Password).subscribe((resp:any)=>
        {
          if(resp=="login successfull")
          {
            this.animatePopup("Login Successful")
            this.isadmin="admin"
            localStorage.setItem("admin",this.isadmin)
            this.router.navigate(["/homePage"])
          }
          else
          {
            alert("NO Corresponding details")
          }
        })
      }
    })
    
  }
}
