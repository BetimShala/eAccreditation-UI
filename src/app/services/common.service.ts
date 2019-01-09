import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  invokeToggleEvenet: Subject<any> = new Subject();

  constructor() { }
 
  // callGetNotesByDealId(){
  //   this.invokePipelineNotesEvent.next();
  // }


  callToggleEvent() {
    this.invokeToggleEvenet.next();
  }

}
