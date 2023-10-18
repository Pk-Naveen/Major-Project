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

  loaderAnimation(){
    this.loaderStatus = "show";
    setTimeout(
      () =>{
    this.loaderStatus = "hide";
      },4000 )
  }

  constructor(private ds:UserServiceService, private router:Router){
    // if(localStorage.getItem('type')=="admin")
    // {
    //     router.navigate(["/homePage"])
    // }
    // else
    // {
    //     router.navigate(["/userPage"])
    // }
  }
  
  loginDataTransfer(form:any)
  {
    this.ds.getUserData(form.value.UserName,form.value.Password).subscribe((res:any)=>{
      this.getdata=res
      this.result=this.getdata.slice(0,12)
      this.username=this.getdata.slice(12);
      if(this.result=="user present")
      {
        this.isuser=this.username;
        this.router.navigate(["/userPage"])
        localStorage.setItem("type",this.isuser)
        // this.router.navigate({"/somecomponent"})
      }
      else
      {
        this.ds.loginadmin(form.value.UserName,form.value.Password).subscribe((resp:any)=>
        {
          if(resp=="login successfull")
          {
            this.isadmin="admin"
            localStorage.setItem("type",this.isadmin)
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
