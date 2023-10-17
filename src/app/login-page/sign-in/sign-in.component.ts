import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../login-page.component.css']
})
export class SignInComponent {
  getdata!:boolean       // changes made
  loaderStatus:string = "hide";
  type:any;

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

      if(this.getdata==true)
      {
        alert("U are a doobakoor")
        this.type="user";
        this.router.navigate(["/userPage"])
        // this.router.navigate({"/somecomponent"})
      }
      else
      {
        this.ds.loginadmin(form.value.UserName,form.value.Password).subscribe((resp:any)=>
        {
          if(resp=="login successfull")
          {
            this.type="admin"
            this.router.navigate(["/homePage"])
          }
          else
          {
            alert("NO Corresponding details")
          }
        })
      }
    })
    localStorage.setItem("type",this.type)
  }
}
