import { Component, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UserServiceService } from 'src/app/user-service.service';
import { Router } from '@angular/router';
import { ipallocation } from 'src/app/auditlist';


@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css'],
})
export class RequestsComponent {
  displayedColumns: string[] = ['name','empID','department','deviceType', "deldetails"];
  requests!:any;
  deleteRows:any;
  dataSource:any=[];
  deleteRows1:any=[];
  ipallocationbydept:ipallocation=new ipallocation();

  
  empID:any;
  name:any;
  deviceType:any;
  department:any;
  sourceTime:any;
  
  // deleteRow1:any=[];
//   dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  //delete row function


  constructor(private ds:UserServiceService, private router:Router){
  }
  // addRecord(j: any) {
    
  //       this.dataSource.data.splice(j, 0);
  //   this.dataSource._updateChangeSubscription(); // <-- Refresh the datasource
  // }

  delRecord(i: any) {
    this.deleteRows=this.dataSource.data.splice(i,1) 
    this.empID=this.dataSource.empID;
    this.dataSource.data.splice(i, 0);
    this.dataSource._updateChangeSubscription(); // <-- Refresh the datasource
    // console.log(this.deleteRows)
    this.deviceType=this.deleteRows[0].deviceType;
    this.empID=this.deleteRows[0].empID;
    this.department=this.deleteRows[0].department;
    this.name=this.deleteRows[0].name;


    this.ipallocationbydept.empID=this.deleteRows[0].empID;
    this.ipallocationbydept.name=this.deleteRows[0].name;
    this.ipallocationbydept.department=this.deleteRows[0].department;
    this.ipallocationbydept.deviceType=this.deleteRows[0].deviceType;
    // this.sourceTime=this.deleteRows[0].time;
    console.log(this.deviceType,this.empID)


    this.ds.requestacceptedbuadmin(this.empID,this.deviceType).subscribe((resp:any)=>{
      // this.dataSource.push(resp);
      if(resp=="request accepted")
      {
        console.log(this.deleteRows[0].empID)
        console.log(this.deleteRows[0].department)
        // console.log(this.deleteRows[0].name)
        this.ds.setvaluesforaudit(this.empID,this.name,this.department,this.deviceType)
        //this.ds.setservice(this.displayedColumns)

        if(this.department=="Administration")
        {
           this.ds.ipforadministration(this.ipallocationbydept).subscribe((resp1:any)=>
           {
            console.log(resp1)
            if(resp1=="IP Alloted")
            {
              alert("IP Successfully Alloted")
            }
            else if(resp1=="No IPs Availalbe")
            {
              alert("All Ip's are occupied please Extend IP")
            }
		
           })

        }
        else if(this.department=="Procurement")
        {
          this.ds.ipforprocurement(this.ipallocationbydept).subscribe((resp2:any)=>
          {
           if(resp2=="IP Alloted")
           {
             alert("IP Successfully Alloted")
           }
           else if(resp2=="No IPs Availalbe")
           {
             alert("All Ip's are occupied please Extend IP")
           }
   
          })
        }
        else if(this.department=="Manufacturing")
        {
          this.ds.ipformanufacturing(this.ipallocationbydept).subscribe((resp3:any)=>
          {
           if(resp3=="IP Alloted")
           {
             alert("IP Successfully Alloted")
           }
           else if(resp3=="No IPs Availalbe")
           {
             alert("All Ip's are occupied please Extend IP")
           }
   
          })
        }
        else
        {
          this.ds.ipforsales(this.ipallocationbydept).subscribe((resp4:any)=>
          {
           if(resp4=="IP Alloted")
           {
             alert("IP Successfully Alloted")
           }
           else if(resp4=="No IPs Availalbe")
           {
             alert("All Ip's are occupied please Extend IP")
           }
   
          })
        }
        
      }
    })
  
  }

  getAllRequests()
  {
    this.ds.getRequests().subscribe((resp:any)=>{
      // this.dataSource.push(resp);
      this.dataSource = new MatTableDataSource<any>(resp);
      console.log(this.dataSource);
    })
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getAllRequests();
  }

}
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;

// }
// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
//   { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
//   { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
//   { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
//   { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
//   { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
//   { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
//   { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
//   { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
//   { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
//   { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
// ];

