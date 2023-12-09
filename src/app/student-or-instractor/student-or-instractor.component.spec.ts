import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOrInstractorComponent } from './student-or-instractor.component';

describe('StudentOrInstractorComponent', () => {
  let component: StudentOrInstractorComponent;
  let fixture: ComponentFixture<StudentOrInstractorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentOrInstractorComponent]
    });
    fixture = TestBed.createComponent(StudentOrInstractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
