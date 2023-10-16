import { AfterViewInit, Component, Input, OnInit, } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { auditList } from 'src/app/auditlist';
import { UserServiceService } from 'src/app/user-service.service';



@Component({
  selector: 'app-audit-log',
  templateUrl: './audit-log.component.html',
  styleUrls: ['./audit-log.component.css', "../requests/requests.component.css"],
  standalone: true,
  imports: [MatTableModule],
})
export class AuditLogComponent implements AfterViewInit{
  displayedColumns: string[] ;
  dataSource:any=[];
  list1:auditList = new auditList();

  @Input() empID:string;

  constructor (private ds: UserServiceService){
    this.list1=this.ds.getvaluesforaudit();
    console.log(this.list1)
  }
  ngAfterViewInit(): void {
    console.log((this.list1.empId))
  }
}



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 0, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];