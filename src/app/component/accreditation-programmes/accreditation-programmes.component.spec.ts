import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreditationProgrammesComponent } from './accreditation-programmes.component';

describe('AccreditationProgrammesComponent', () => {
  let component: AccreditationProgrammesComponent;
  let fixture: ComponentFixture<AccreditationProgrammesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccreditationProgrammesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccreditationProgrammesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
