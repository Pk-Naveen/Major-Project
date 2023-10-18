import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-my-ip-list',
  templateUrl: './my-ip-list.component.html',
  styleUrls: ['./my-ip-list.component.css','../../home/requests/requests.component.css'],
  standalone: true,
  imports: [MatTableModule]
})
export class MyIpListComponent {
  displayedColumns:any = ['name','empID','department','deviceType','ipaddress','deldetails'];
  userIpList:[] = [];
  ipAddress:any;
  dataSource:any;

  constructor(private ds:UserServiceService){
  }


  // public getallIP()
  // {
  //   console.log("hello")
  //   this.ds.getAdministration().subscribe((resp:Administration[])=>{

  //     console.log("Response",resp);
  //     this.administration=resp;
  //     this.dataSource = new MatTableDataSource<Administration>(this.administration);
  //     console.log("Response1",this.administration);
  //   })
  // }
}
