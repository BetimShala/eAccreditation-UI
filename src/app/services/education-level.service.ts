import { Injectable } from '@angular/core';
import { EducationLevel } from '../models/education-level.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EducationLevelService {

  constructor(
    private http: HttpClient
  ) { }

  getEducationLevels(){
    return this.http.get<EducationLevel[]>('/api/educationLevels')
  }
}
