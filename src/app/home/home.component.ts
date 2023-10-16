import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChartOptions, ChartType,ChartData } from 'chart.js';
//import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor (private router: Router){
    // monkeyPatchChartJsTooltip();
    // monkeyPatchChartJsLegend();
    
  }
  logout(){
    this.router.navigate(['/landingPage']);
  }

  create(){
    this.router.navigate(['Login/signUp'])
  }

  public pieChartOptions: ChartOptions ={
    responsive:true,
    plugins:{

    },
  };

  public pieChartData:ChartData<'pie'>={
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets:[
      {label:'a1',data:[65, 59, 80, 81, 56, 55, 40]},
      // {label:'a2',data:[2000]},
      // {label:'a3',data:[3000]},

    ]

  }

  // public pieChartLabels: Label[] = [['SciFi'], ['Drama'], 'Comedy'];
  // public pieChartData: SingleDataSet = [30, 50, 20];
  // public pieChartType: ChartType = 'pie';
  // public pieChartLegend = true;
  // public pieChartPlugins = [];
  


}
