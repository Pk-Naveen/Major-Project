import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../login-page.component.css','./sign-up.component.css']
})
export class SignUpComponent {

  updatecandidate!:any;

  constructor(private ds:UserServiceService, private router:Router){}

  signup(form:any)
  {
    this.ds.userRegistration(form.value.Name,form.value.UserName,form.value.Password,form.value.EmailAddress).subscribe((res:any)=>{
      this.updatecandidate=res
      console.log(res)
      if(this.updatecandidate==="Candidate Added")
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
