import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Semester } from '../models/semester.model';

@Injectable({
  providedIn: 'root'
})
export class SemesterService {

  constructor(
    private http:HttpClient
    ) { }

    getSemeters(){
      return this.http.get<Semester[]>('/api/semesters')
    }
}
