import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccreditationTypes } from '../models/accreditation-types.model';

@Injectable({
  providedIn: 'root'
})
export class AccreditationTypesService {

  constructor(
    private http:HttpClient
  ) { }

  getAccreditationTypes(){
    return this.http.get<AccreditationTypes[]>('/api/accreditationTypes')
  }
}
