import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-extend-ips',
  templateUrl: './extend-ips.component.html',
  styleUrls: ['./extend-ips.component.css']
})
export class ExtendIpsComponent{
  showBar:string ='show';
  department:string;
  extension:string
  userForm: FormGroup;
  defaultCountry: string;


  showMenu(){
    this.showBar = (this.showBar === 'hiden')?'show':'hiden' 
  }
  selected(form){
    console.log(form.value.department,form.value.extension)
  }
 
}

