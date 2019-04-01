import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AccreditationApplication } from '../models/accreditation-app.model';
import { AccreditationProgrammes } from '../models/accreditation-programmes.model';
import { AccreditationApplicationVM } from '../models/accreditation-application';
import { AccrStudyProgrammesSubjectsVM } from '../models/accreditation-programm-subjects';

@Injectable({
  providedIn: 'root'
})
export class AccreditationService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  getAccreditationsList(){
    return this.http.get<AccreditationApplication[]>('/api/accreditation/all')
  }

  getAccreditationProgrammes(id:number){
    return this.http.get<AccreditationProgrammes[]>('/api/accreditation/programmes/'+id);
  }

  getAccreditationProgramSubjects(id:number){
    return this.http.get<AccrStudyProgrammesSubjectsVM[]>(`/api/accreditation/program/${id}/subjects`);
  }

  applyForAccreditation(model:AccreditationApplicationVM){
    console.log(model);
    return this.http.post('/api/accreditation/add',model);
  }
}
