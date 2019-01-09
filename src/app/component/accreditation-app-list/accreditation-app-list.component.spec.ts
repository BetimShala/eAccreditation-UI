import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreditationAppListComponent } from './accreditation-app-list.component';

describe('AccreditationAppListComponent', () => {
  let component: AccreditationAppListComponent;
  let fixture: ComponentFixture<AccreditationAppListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccreditationAppListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccreditationAppListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
