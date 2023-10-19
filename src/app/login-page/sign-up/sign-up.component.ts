import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../login-page.component.css','./sign-up.component.css']
})
export class SignUpComponent {
  updatecandidate!:any;
  name:any;
  emailExp: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  warningText: string="";
  statusText: string="abs";
  signUpForm!: NgForm;
  statusClass:string = 'hidden';

  
  animatePopup(text:any){
    this.statusText = text
    this.statusClass = 'show';
    setTimeout(
      () => {
        this.statusClass = 'hidden'
      },3000
    )
  }
  constructor(private ds:UserServiceService, private router:Router){}


  getFormData(form:NgForm){
    this.signUpForm=form
  }

  validateSubmit(form:NgForm){
    this.getFormData(form)
    console.log(this.signUpForm.value)
    if(this.signUpForm.value.Name === "" || this.signUpForm.value.EmailAddress === ""){

        this.animatePopup("All fields are required !")
        return false
    }
    else if(!this.emailExp.test(this.signUpForm.value.EmailAddress)){
      this.animatePopup("Enter a valid email ID")
      return false;
    }

    else{
      this.signup(form)
      return true
    }
  }

  signup(form:any)
  {this.ds.userRegistration(form.value.Name,form.value.UserName,form.value.Password,form.value.EmailAddress,form.value.EmployeeID).subscribe((res:any)=>{
      this.updatecandidate=res
      console.log(res)
      if(this.updatecandidate=="Registered")
      {
        alert("User Registered Successfully")
        this.router.navigate(['/homePage'])
      }
      else if(this.updatecandidate=="username")
      {
        alert("Username already exist")
      }
      else if(this.updatecandidate=="email")
      {
        alert("Email already exist")
      }
      else
      {
        alert("Username and Email Already Exist")
      }
    })
  }

}

