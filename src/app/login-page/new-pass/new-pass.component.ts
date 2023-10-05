import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';
import { Email } from 'src/app/users';

@Component({
  selector: 'app-new-pass',
  templateUrl: './new-pass.component.html',
  styleUrls: ['../login-page.component.css','./new-pass.component.css']
})
export class NewPassComponent {
  // email check
  
  email:Email=new Email
  verificationEmail:string=this.email.email;
  EmailToCheck: String=""
 
  

}
