import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllinstructorSubjectComponent } from './allinstructor-subject.component';

describe('AllinstructorSubjectComponent', () => {
  let component: AllinstructorSubjectComponent;
  let fixture: ComponentFixture<AllinstructorSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllinstructorSubjectComponent]
    });
    fixture = TestBed.createComponent(AllinstructorSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
