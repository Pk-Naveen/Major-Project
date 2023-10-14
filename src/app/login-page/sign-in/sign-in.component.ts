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

  loaderAnimation(){
    this.loaderStatus = "show";
    setTimeout(
      () =>{
    this.loaderStatus = "hide";
      },4000 )
  }

  constructor(private ds:UserServiceService, private router:Router){}
  
  loginDataTransfer(form:any)
  {
    this.ds.getUserData(form.value.UserName,form.value.Password).subscribe((res:any)=>{
      this.getdata=res

      if(this.getdata==true)
      {
        alert("U are a doobakoor")
        // this.router.navigate({"/somecomponent"})
      }
      else
      {
        alert("U are not a doobakkor")
      }
    })
  }
}
