import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserServiceService } from 'src/app/user-service.service';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css','../ip-list.component.css','../../requests/requests.component.css'],
  standalone:true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule,MatButtonModule],
})
export class SalesComponent {
  displayedColumns:any = ['name','empID','department','deviceType','ipaddress','deldetails'];
  sales:[] = [];
  sample:any;
  dataSource3:any;
  deleteRows:any;
  ipAddress: any;

  constructor(private ds:UserServiceService){
  }
  public getallIP()
  {
    console.log("hello")
    this.ds.getSales().subscribe((resp:any)=>{

      console.log("Response",resp);
      this.sales=resp;
      this.dataSource3 = new MatTableDataSource<any>(this.sales);
      console.log("Response1",this.sales);
    })
  }
  delRecord(i:any){
    this.deleteRows=this.dataSource3.data.splice(i,1) 
    this.ipAddress=this.deleteRows[0].ipaddress
    this.dataSource3.data.splice(i, 0);
    this.dataSource3._updateChangeSubscription()

    this.ds.deletefromSales(this.ipAddress).subscribe((resp:any)=>
    {
      if(resp=="IP deleted")
      {
        alert("IP successfully Deleted")
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource3.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit()
  {
    this.getallIP();
  }
}

export interface Administration {

  
  department:string;
  deviceType:string;
  empID:any;
  id:any;
  ipaddress:any;
  ipnumber:any;
  ipstatus:any;
  name:any
  
}
