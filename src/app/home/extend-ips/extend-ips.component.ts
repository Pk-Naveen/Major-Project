import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/user-service.service';

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

constructor(private ds:UserServiceService){}

  showMenu(){
    this.showBar = (this.showBar === 'hiden')?'show':'hiden' 
  }
  selected(form){
    console.log(form.value.department,form.value.extension)
    this.ds.extendIPvalues(form.value.department,form.value.extension).subscribe((resp:any)=>
    {
      if(resp=="IP extended")
      {
        alert("IP extended")
      }
      else
      {
        alert("IP not extended")
      }
    })
  }
 
}

