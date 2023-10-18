import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserServiceService } from 'src/app/user-service.service';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-manufacturing',
  templateUrl: './manufacturing.component.html',
  styleUrls: ['./manufacturing.component.css','../ip-list.component.css','../../requests/requests.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule,MatButtonModule],
})
export class ManufacturingComponent {
  displayedColumns:any = ['name','empID','department','deviceType','ipaddress','deldetails'];
  manufacturing:[]= [];
  sample:any;
  dataSource1:any
  deleteRows:any;
  ipAddress: any;

  constructor(private ds:UserServiceService){
  }


  public getallIP()
  {
    console.log("hello")
    this.ds.getManufacturing().subscribe((resp:any)=>{

      console.log("Response",resp);
      this.manufacturing=resp;
      this.dataSource1 = new MatTableDataSource<any>(this.manufacturing);
      console.log("Response1",this.manufacturing);
    })
  }

  delRecord(i:any){
    this.deleteRows=this.dataSource1.data.splice(i,1) 
    this.ipAddress=this.deleteRows[0].ipaddress
    this.dataSource1.data.splice(i, 0);
    this.dataSource1._updateChangeSubscription()

    this.ds.deletefromManufacturing(this.ipAddress).subscribe((resp:any)=>
    {
      if(resp=="IP deleted")
      {
        alert("IP successfully Deleted")
      }
    })

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();
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
