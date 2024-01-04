import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPenddingStudentRequestComponent } from './all-pendding-student-request.component';

describe('AllPenddingStudentRequestComponent', () => {
  let component: AllPenddingStudentRequestComponent;
  let fixture: ComponentFixture<AllPenddingStudentRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllPenddingStudentRequestComponent]
    });
    fixture = TestBed.createComponent(AllPenddingStudentRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
