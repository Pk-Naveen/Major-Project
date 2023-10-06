import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';
import { Email } from 'src/app/users';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['../login-page.component.css', './forget-pass.component.css']
})
export class ForgetPassComponent {


  isforget:boolean=false;
  isReset:boolean=false;
  isCorrectVerification:boolean=false;
  email:Email=new Email
  emailid:string="";
  updation!:any
  otpfromspring!:any;
  otpfromuser!:any;
// Required field for email address
constructor(private ds:UserServiceService, private router:Router){}

passwordupdate(form1:any)
{
  this.ds.updatepassword(this.emailid,form1.value.NewPassword) .subscribe((res:any)=>{
    this.updation=res
    
    if(this.updation=="Updated")
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

sendOtp()
{
  this.ds.sendOtp(this.emailid) .subscribe((res:any)=>{
    this.otpfromspring=res
    console.log(this.otpfromspring);
    this.isforget=true;
  })
  
}

otpValidation()
{
  if(this.otpfromspring==this.otpfromuser)
  {
    this.isReset=true;
    this.isCorrectVerification=true;
  }
  else{
    this.isReset=false;
    this.isCorrectVerification=false;
  }
  console.log(this.isCorrectVerification +" "+this.isReset+" "+this.isforget)
}
// getForget(){
//   this.emailid=this.email.email;
//   this.isforget=true;
//   console.log(this.emailid)
// }
getReset(){
  this.emailid=this.email.email;
  this.isReset=true;
  console.log(this.emailid)
}




}
