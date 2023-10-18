import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-manufacturing',
  templateUrl: './manufacturing.component.html',
  styleUrls: ['./manufacturing.component.css','../ip-list.component.css','../../requests/requests.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule],
})
export class ManufacturingComponent {
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
  
  department:string;
  deviceType:string;
  empID:any;
  id:any;
  ipaddress:any;
  ipnumber:any;
  ipstatus:any;
  name:any
  
}
