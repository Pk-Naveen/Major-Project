import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserServiceService } from 'src/app/user-service.service';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-adminstration',
  templateUrl: './adminstration.component.html',
  styleUrls: ['./adminstration.component.css','../ip-list.component.css','../../requests/requests.component.css'],
  standalone:true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule],

})
export class AdminstrationComponent {
  displayedColumns:any = ['name','empID','department','deviceType','ipaddress','deldetails'];
  administration:Administration[] = [];
  sample:any;
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
      // this.administration = []
      // this.sample.push(resp)
      // for(let i of resp){
      //   i.name = resp.name;
      //   i.department = resp.department;
      //   i.devicetype = resp.devicetype;
      //   i.empID = resp.empID;
      //   i.ipaddress = resp.ip;
      //   console.log(
      //     {
      //       "name":resp.name
      //     }
      //   )
      //   this.administration.push(i)
      // }
      // console.log("Array ",this.administration);
      //  this.Administrationresp;

    })
  }

  delRecord(i:any){

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
