import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
@Component({
  selector: 'app-ip-list',
  templateUrl: './ip-list.component.html',
  styleUrls: ['./ip-list.component.css', '../requests/requests.component.css'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule,MatFormFieldModule, MatInputModule],
})
export class IpListComponent implements OnInit {
  displayedColumns:any = ['name','empID','department','deviceType','ipaddress'];
  administration:Administration[] = [];
  sample:any;
  dataSource = new MatTableDataSource<Administration>(this.administration);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private ds:UserServiceService, private router:Router){}
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
    // {
      
    //   (resp: any)=> 
    //   {
    //     this.Administration=resp;
    //     console.log(resp);
    //   }
    // }
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    // this.getallIP();
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

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
//   {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
//   {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
//   {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
//   {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
//   {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
//   {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
//   {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
//   {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
//   {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
// ];

// const Administration: Administration[]=[]