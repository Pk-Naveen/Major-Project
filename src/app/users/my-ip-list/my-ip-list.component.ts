import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-my-ip-list',
  templateUrl: './my-ip-list.component.html',
  styleUrls: ['./my-ip-list.component.css','../../home/requests/requests.component.css'],
  standalone: true,
  imports: [MatTableModule]
})
export class MyIpListComponent implements OnInit {
  displayedColumns:any = ['name','empID','department','deviceType','ipaddress','deldetails'];
  userIpList:[] = [];
  ipAddress:any;
  dataSource:any;
  deleteRows: any;
  // this.dataSource = new MatTableDataSource<Administration>(this.administration);

  constructor(private ds:UserServiceService){
  }
  delRecord(i: any) {
    if(confirm("do u wish to delete")==true){
      this.deleteRows=this.dataSource.data.splice(i,1) 
      this.dataSource.data.splice(i, 0);
      this.dataSource._updateChangeSubscription();

      if(localStorage.getItem("department")=="administration")
      {
        this.ds.deletefromAdministration(this.deleteRows[0].ipaddress).subscribe((resp:any)=>{
        console.log("Response",resp);
        })
      }
      if(localStorage.getItem("department")=="sales")
      {
        this.ds.deletefromSales(this.deleteRows[0].ipaddress).subscribe((resp:any)=>{
        console.log("Response",resp);
        })
      }
      if(localStorage.getItem("department")=="procurement")
      {
        this.ds.deletefromProcurement(this.deleteRows[0].ipaddress).subscribe((resp:any)=>{
        console.log("Response",resp);
        })
      }
      if(localStorage.getItem("department")=="manufacturing")
      {
        this.ds.deletefromManufacturing(this.deleteRows[0].ipaddress).subscribe((resp:any)=>{
        console.log("Response",resp);
        })
      }
    }

  }


  public getallIP()
  {
    console.log("hello")
    if(localStorage.getItem("department")=="administration")
    {
      this.ds.getUserIPListadministration(localStorage.getItem("empId")).subscribe((resp:any)=>{
      console.log("Response",resp);
      this.userIpList=resp;
      this.dataSource = new MatTableDataSource<any>(this.userIpList);
      })
    }
    if(localStorage.getItem("department")=="sales")
    {
      this.ds.getUserIPListsales(localStorage.getItem("empId")).subscribe((resp:any)=>{
      console.log("Response",resp);
      this.userIpList=resp;
      this.dataSource = new MatTableDataSource<any>(this.userIpList);
      })
    }
    if(localStorage.getItem("department")=="procurement")
    {
      this.ds.getUserIPListprocurement(localStorage.getItem("empId")).subscribe((resp:any)=>{
      console.log("Response",resp);
      this.userIpList=resp;
      this.dataSource = new MatTableDataSource<any>(this.userIpList);
      })
    }
    if(localStorage.getItem("department")=="manufacturing")
    {
      this.ds.getUserIPListmanufacturing(localStorage.getItem("empId")).subscribe((resp:any)=>{
      console.log("Response",resp);
      this.userIpList=resp;
      this.dataSource = new MatTableDataSource<any>(this.userIpList);
      })
    }
 
  }

  ngOnInit(){
    this.getallIP()
  }
}
