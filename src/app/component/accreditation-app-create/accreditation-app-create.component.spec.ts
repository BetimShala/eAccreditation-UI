import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreditationAppCreateComponent } from './accreditation-app-create.component';

describe('AccreditationAppCreateComponent', () => {
  let component: AccreditationAppCreateComponent;
  let fixture: ComponentFixture<AccreditationAppCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccreditationAppCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccreditationAppCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
