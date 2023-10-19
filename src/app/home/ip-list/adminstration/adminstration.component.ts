import { Component, NgModule } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserServiceService } from 'src/app/user-service.service';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-adminstration',
  templateUrl: './adminstration.component.html',
  styleUrls: ['./adminstration.component.css','../ip-list.component.css','../../requests/requests.component.css'],
  standalone:true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule,MatButtonModule],

})
export class AdminstrationComponent {
  displayedColumns:any = ['name','empID','department','deviceType','ipaddress','deldetails'];
  administration:Administration[] = [];
  sample:any;
  deleteRows:any;
  ipAddress:any;
  dataSource = new MatTableDataSource<Administration>(this.administration);

  constructor(private ds:UserServiceService){
  }


  public getallIP()
  {
    console.log("hello")
    this.ds.getAdministration().subscribe((resp:Administration[])=>{

      console.log("Response",resp);
      this.administration=resp;
      this.dataSource = new MatTableDataSource<Administration>(this.administration);
      console.log("Response1",this.administration);
    })
  }

  delRecord(i:any){
    this.deleteRows=this.dataSource.data.splice(i,1) 
    this.ipAddress=this.deleteRows[0].ipaddress
    this.dataSource.data.splice(i, 0);
    this.dataSource._updateChangeSubscription()

    this.ds.deletefromAdministration(this.ipAddress).subscribe((resp:any)=>
    {
      if(resp=="IP deleted")
      {
        alert("IP successfully Deleted")
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
