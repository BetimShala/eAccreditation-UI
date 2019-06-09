import { Component, OnInit, ViewChild } from '@angular/core';
import { AccreditationProgrammes } from 'src/app/models/accreditation-programmes.model';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { AccreditationService } from 'src/app/services/accreditation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accreditation-programmes',
  templateUrl: './accreditation-programmes.component.html',
  styleUrls: ['./accreditation-programmes.component.scss']
})
export class AccreditationProgrammesComponent implements OnInit {
  list: AccreditationProgrammes[];
  listMatTable = new MatTableDataSource(this.list);
  displayedColumns: string[] = [
    'programName',    
    'educationLevel',
    'faculty',
    'specialismDescription',
    'ects',
    'diplomaName',
    'studyDuration',
    'maxNumber',
    'studyType',
    'esac',
    'esacField',
    'subjects'
  ];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private route: ActivatedRoute,private _accreditationService:AccreditationService) {
   }

  ngOnInit() {
    this.listMatTable.sort = this.sort;
    this.listMatTable.paginator = this.paginator;
    this.getAccreditationProgrammes(parseInt(this.route.snapshot.paramMap.get('id')));
  }

  getAccreditationProgrammes(id:number){
    this._accreditationService.getAccreditationProgrammes(id).subscribe(response=>{
      this.listMatTable.data = response['$values'];
    }, error=>{
      console.log(error);
    })
  }
  
  getPageSizeOptions(): number[] {
    return [5,10, 20,50, this.listMatTable.data.length];
  }

}
