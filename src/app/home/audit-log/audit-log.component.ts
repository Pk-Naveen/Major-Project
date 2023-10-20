import { AfterViewInit, Component, Input, OnInit, } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { auditList } from 'src/app/auditlist';
import { UserServiceService } from 'src/app/user-service.service';



@Component({
  selector: 'app-audit-log',
  templateUrl: './audit-log.component.html',
  styleUrls: ['./audit-log.component.css', "../requests/requests.component.css"],
  standalone: true,
  imports: [MatTableModule],
})
export class AuditLogComponent implements OnInit{
  displayedColumns:any = ['empID','msg'];
  sample:any;
  dataSource:any=[];
  list1:auditList = new auditList();

  @Input() empID:string;

  constructor (private ds: UserServiceService){
    // this.list1=this.ds.getvaluesforaudit();
    console.log(this.list1)
  }
  ngOnInit() {
    this.ds.getvaluesforaudit().subscribe((resp:any)=>
    {
      this.sample=resp;
      this.dataSource = new MatTableDataSource<any>(this.sample);
      console.log(this.sample)
    })
  }
  
}


