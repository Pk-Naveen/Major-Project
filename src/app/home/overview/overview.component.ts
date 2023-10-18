import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  chart: Chart<"pie", number[], string>;
  createChart(){

    this.chart = new Chart("MyChart", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Red', 'blue' ],
	       datasets: [{
    label: 'My First Dataset',
    data: [200, 240],
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
              color:"black",
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
  }

}


