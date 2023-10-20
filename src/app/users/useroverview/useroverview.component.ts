import { Component } from '@angular/core';

@Component({
  selector: 'app-useroverview',
  templateUrl: './useroverview.component.html',
  styleUrls: ['./useroverview.component.css']
})
export class UseroverviewComponent {
  empid: string;
  userName: string;
  name: string

  constructor(){
    this.empid=localStorage.getItem("empId")
    this.name=localStorage.getItem('user')
  }


}
