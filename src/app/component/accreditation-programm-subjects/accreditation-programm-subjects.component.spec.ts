import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreditationProgrammSubjectsComponent } from './accreditation-programm-subjects.component';

describe('AccreditationProgrammSubjectsComponent', () => {
  let component: AccreditationProgrammSubjectsComponent;
  let fixture: ComponentFixture<AccreditationProgrammSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccreditationProgrammSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccreditationProgrammSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
