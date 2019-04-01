import { Component, OnInit, ViewChild } from '@angular/core';
import { AccreditationService } from 'src/app/services/accreditation.service';
import { AccreditationApplication } from 'src/app/models/accreditation-app.model';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-accreditation-app-list',
  templateUrl: './accreditation-app-list.component.html',
  styleUrls: ['./accreditation-app-list.component.scss']
})
export class AccreditationAppListComponent implements OnInit {
  list: AccreditationApplication[];
  listMatTable = new MatTableDataSource(this.list);
  displayedColumns: string[] = [
    'university',    
    'academicYear',
    'applicationDate',
    'validFromDate',
    'validToDate',
    'verdict',
    'accreditationType',
    'actions'
  ];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private _accreditationService:AccreditationService) {
   }

  ngOnInit() {
    this.listMatTable.sort = this.sort;
    this.listMatTable.paginator = this.paginator;
    this.getAccreditationList();
  }

  getAccreditationList(){
    this._accreditationService.getAccreditationsList().subscribe(response=>{
      this.listMatTable.data = response;
    }, error=>{
      console.log(error);
    })
  }
  
  getPageSizeOptions(): number[] {
    return [10, 20,50, this.listMatTable.data.length];
  }
}
