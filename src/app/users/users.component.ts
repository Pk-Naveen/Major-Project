import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  name:string="guru";
  constructor(private router:Router){}
  logout(){
    this.router.navigate(['/landingPage']);
  }

}
