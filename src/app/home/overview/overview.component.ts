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
  chart2: Chart<"pie", number[], string>;
  administrationallocated:any;
  manufacturingallocated:any;
  salesallocated:any;
  procurementallocated:any;
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
      console.log(this.administrationallocated)

      this.ds.valueforpiesales().subscribe((resp1:any)=>
    {
      this.salesallocated=parseInt(resp1)
      this.totalAllocatedIps+=parseInt(resp1)
      console.log(this.totalAllocatedIps)


      this.ds.valueforpieprocurement().subscribe((resp2:any)=>
      {
        this.procurementallocated=parseInt(resp2)
        this.totalAllocatedIps+=parseInt(resp2)
        console.log(this.totalAllocatedIps)





        this.ds.valueforpiemanufacturing().subscribe((resp3:any)=>
        {
          this.manufacturingallocated=parseInt(resp3)
          console.log(this.manufacturingallocated,'manu')
          this.totalAllocatedIps+=parseInt(resp3)
          this.chart = new Chart("MyChart", {
            type: 'pie', //this denotes tha type of chart
      
            data: {// values on X-Axis
              labels: ['Red', 'blue' ],
               datasets: [{
          label: 'My First Dataset',
          data: [this.totalAllocatedIps, 255],
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

          const a1= this.administrationallocated
          const a2= this.salesallocated
          const a3= this.manufacturingallocated
          const a4= this.procurementallocated
  
          
          console.log(a3,"a3")
          this.chart2 = new Chart("MyChart2", {
            type: 'pie', //this denotes tha type of chart
            
            data: {// values on X-Axis
              labels: ['adminstraion','manufacturing','procurement','sales'],
               datasets: [{
          label: 'My First Dataset',
          data: [a1,a3,a4,a2],
          backgroundColor: [
            'red',
            'pink',
            'green',
            'yellow'			
          ],
          hoverOffset: 4
        }],
            },
            options: {
              aspectRatio:2.5,
              plugins:{
                legend:{
                  labels:{
                    color:"black",
                    font:{
                      size:18,
                      weight:'bold'
                    }
                  }
                }
              },
            },
      
          });
    
        })
        // this.totalAllocatedIps=this.administrationallocated+this.salesallocated+this.procurementallocated+this.manufacturingallocated
     
  




        
      })


    })
    })
    
   
   
    
  }
  // createChart(){

  //   this.chart = new Chart("MyChart", {
  //     type: 'pie', //this denotes tha type of chart

  //     data: {// values on X-Axis
  //       labels: ['Red', 'blue' ],
	//        datasets: [{
  //   label: 'My First Dataset',
  //   data: [this.totalAllocatedIps, 255],
  //   backgroundColor: [
  //     'red',
  //     'blue',			
  //   ],
  //   hoverOffset: 4
  // }],
  //     },
  //     options: {
  //       aspectRatio:2.5,
  //       plugins:{
  //         legend:{
  //           labels:{
  //             color:"white",
  //             font:{
  //               size:20
  //             }
  //           }
  //         }
  //       },
  //     },

  //   });
  // }
  // createChart1(){

  //   this.chart2 = new Chart("MyChart1", {
  //     type: 'pie', //this denotes tha type of chart

  //     data: {// values on X-Axis
  //       labels: ['adminstraion','manufacturing','procurement','sales'],
	//        datasets: [{
  //   label: 'My First Dataset',
  //   data: [this.administrationallocated,this.manufacturingallocated,this.procurementallocated,this.salesallocated],
  //   backgroundColor: [
  //     'red',
  //     'pink',
  //     'green',
	// 		'yellow'			
  //   ],
  //   hoverOffset: 4
  // }],
  //     },
  //     options: {
  //       aspectRatio:2.5,
  //       plugins:{
  //         legend:{
  //           labels:{
  //             color:"black",
  //             font:{
  //               size:18,
  //               weight:'bold'
  //             }
  //           }
  //         }
  //       },
  //     },

  //   });
  //  }
  ngOnInit(): void {
    // this.createChart();
    // this.createChart1();
    this.getallotedvalues();
  }

}


