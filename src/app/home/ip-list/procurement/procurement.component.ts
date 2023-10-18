import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserServiceService } from 'src/app/user-service.service';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-procurement',
  templateUrl: './procurement.component.html',
  styleUrls: ['./procurement.component.css','../ip-list.component.css','../../requests/requests.component.css'],
  standalone:true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule,MatButtonModule],
})
export class ProcurementComponent {
  displayedColumns:any = ['name','empID','department','deviceType','ipaddress','deldetails'];
  procurement:[] = [];
  sample:any;
  dataSource2:any;
  deleteRows:any;
  ipAddress: any;

  constructor(private ds:UserServiceService){
  }
  public getallIP()
  {
     console.log("hello")
    this.ds.getProcurement().subscribe((resp:any)=>{

      console.log("Response",resp);
      this.procurement=resp;
      this.dataSource2 = new MatTableDataSource<any>(this.procurement);
      console.log("Response1",this.procurement);
    })
  }

  delRecord(i:any){

    this.deleteRows=this.dataSource2.data.splice(i,1) 
    this.ipAddress=this.deleteRows[0].ipaddress
    this.dataSource2.data.splice(i, 0);
    this.dataSource2._updateChangeSubscription()

    this.ds.deletefromProcurement(this.ipAddress).subscribe((resp:any)=>
    {
      if(resp=="IP deleted")
      {
        alert("IP successfully Deleted")
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource2.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit()
  {
    this.getallIP();
  }
}
export interface Administration {
  // name: string,
  // department:string,
  // empID:string,
  // devicetype:string;
  // id: string,
  // ipnumber: number,
  // ipaddress: string,
  // ipstatus: string,

  
  department:string;
  deviceType:string;
  empID:any;
  id:any;
  ipaddress:any;
  ipnumber:any;
  ipstatus:any;
  name:any
}
