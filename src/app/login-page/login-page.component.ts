import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  ngOnInit(): void {

    this.loaderAnimation()

  }

 

  loaderStatus:string = "hide";

  loaderAnimation(){

    this.loaderStatus = "show";

    setTimeout(

      () =>{

    this.loaderStatus = "hide";

      },1000 )

  }
  }

