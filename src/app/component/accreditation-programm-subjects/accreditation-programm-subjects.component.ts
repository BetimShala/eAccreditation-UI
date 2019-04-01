import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { AccrStudyProgrammesSubjectsVM } from 'src/app/models/accreditation-programm-subjects';
import { AccreditationService } from 'src/app/services/accreditation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accreditation-programm-subjects',
  templateUrl: './accreditation-programm-subjects.component.html',
  styleUrls: ['./accreditation-programm-subjects.component.scss']
})
export class AccreditationProgrammSubjectsComponent implements OnInit {
  programName:string;
  list: AccrStudyProgrammesSubjectsVM[];
  listMatTable = new MatTableDataSource(this.list);
  displayedColumns: string[] = [
    'professor',    
    'description',
    'semester',
    'exercisesNum',
    'lecturesNum',
    'creditsNum',
    'consultationNum',
    'clinicNum',
    'practiceNum',
    'researchNum',
    'subjectCode',
  ];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private route: ActivatedRoute,private _accreditationService:AccreditationService) {
   }

  ngOnInit() {
    this.listMatTable.sort = this.sort;
    this.listMatTable.paginator = this.paginator;
    this.getAccreditationProgramSubjects(parseInt(this.route.snapshot.paramMap.get('id')));
  }

  getAccreditationProgramSubjects(id:number){
    this._accreditationService.getAccreditationProgramSubjects(id).subscribe(response=>{
      this.listMatTable.data = response;
      this.programName = response[0]['AccrSP'].ProgrammDescription;
      
    }, error=>{
      console.log(error);
    })
  }
  
  getPageSizeOptions(): number[] {
    return [10, 20,50, this.listMatTable.data.length];
  }
}
