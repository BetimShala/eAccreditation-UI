import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Faculty } from '../models/faculty.model';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(
    private http:HttpClient
  ) { }

  getFacultiesByUniversity(uniId:number){
    return this.http.get<Faculty[]>('/api/faculties/university/'+uniId);
  }
}
