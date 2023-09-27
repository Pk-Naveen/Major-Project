import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  getdata!:boolean       // changes made

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
