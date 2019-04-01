import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { University } from '../models/university.model';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  constructor(
    private http: HttpClient
  ) { }

  getUniversities(){
    return this.http.get<University[]>('/api/universities')
  }
}
