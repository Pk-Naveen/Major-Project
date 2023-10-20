import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  chart: Chart<"pie", number[], string>;
  chart1: Chart<"pie", number[], string>;
  public  administrationallocated:any;
  public manufacturingallocated:any;
  public salesallocated:any;
  public procurementallocated:any;
  public totalAllocatedIps:number=0;
  tai:number
  constructor(private ds:UserServiceService){
    
  }
  getallotedvalues()
  { 
   
    this.ds.valueforpieadministration().subscribe((resp:any)=>
    {
      this.administrationallocated=parseInt(resp)
      this.totalAllocatedIps+=parseInt(resp)


      this.ds.valueforpiesales().subscribe((resp1:any)=>
    {
      this.salesallocated=parseInt(resp1)
      this.totalAllocatedIps+=parseInt(resp1)
      console.log(this.totalAllocatedIps)



}


