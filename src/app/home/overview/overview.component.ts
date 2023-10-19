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
  administrationallocated:any;
  manufacturingallocated:any;
  salesallocated:any;
  procurementallocated:any;
  totalAllocatedIps:number=0;
  tai:number
  constructor(private ds:UserServiceService){
    
  }
  getallotedvalues()
  { 
   
    this.ds.valueforpieadministration().subscribe((resp:any)=>
    {
      this.administrationallocated=parseInt(resp)
      this.totalAllocatedIps+=parseInt(resp)
      console.log(this.totalAllocatedIps)

    })
    this.ds.valueforpiesales().subscribe((resp:any)=>
    {
      this.salesallocated=parseInt(resp)
      this.totalAllocatedIps+=parseInt(resp)
      console.log(this.totalAllocatedIps)

    })
    this.ds.valueforpieprocurement().subscribe((resp:any)=>
    {
      this.procurementallocated=parseInt(resp)
      this.totalAllocatedIps+=parseInt(resp)
      console.log(this.totalAllocatedIps)

    })
    this.ds.valueforpiemanufacturing().subscribe((resp:any)=>
    {
      this.manufacturingallocated=parseInt(resp)
      this.totalAllocatedIps+=parseInt(resp)
      

    })
    // this.totalAllocatedIps=this.administrationallocated+this.salesallocated+this.procurementallocated+this.manufacturingallocated
    
  }
  createChart(){

    this.chart = new Chart("MyChart", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Red', 'blue' ],
	       datasets: [{
    label: 'My First Dataset',
    data: [this.administrationallocated+this.manufacturingallocated+this.procurementallocated+this.salesallocated, 1],
    backgroundColor: [
      'red',
      'blue',			
    ],
    hoverOffset: 4
  }],
      },
      options: {
        aspectRatio:2.5,
        plugins:{
          legend:{
            labels:{
              color:"white",
              font:{
                size:20
              }
            }
          }
        },
      },

    });
  }
  ngOnInit(): void {
    this.createChart();
    this.getallotedvalues();
  }

}


