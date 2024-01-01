import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAcceptedStudentRequestComponent } from './all-accepted-student-request.component';

describe('AllAcceptedStudentRequestComponent', () => {
  let component: AllAcceptedStudentRequestComponent;
  let fixture: ComponentFixture<AllAcceptedStudentRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllAcceptedStudentRequestComponent]
    });
    fixture = TestBed.createComponent(AllAcceptedStudentRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
