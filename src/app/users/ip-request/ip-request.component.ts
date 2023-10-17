import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-ip-request',
  templateUrl: './ip-request.component.html',
  styleUrls: ['./ip-request.component.css']
})
export class IpRequestComponent {

  constructor(private ds:UserServiceService){}

  selected(form){
    console.log(form.value.department,form.value.extension)
    // this.ds.makeIpRequest(form.value.department,form.value.extension).subscribe((resp:any)=>
    // {
    //   if(resp=="IP extended")
    //   {
    //     alert("IP extended")
    //   }
    //   else
    //   {
    //     alert("IP not extended")
    //   }
    // })
  }

}
