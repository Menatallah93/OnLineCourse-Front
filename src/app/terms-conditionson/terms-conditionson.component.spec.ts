import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsConditionsonComponent } from './terms-conditionson.component';

describe('TermsConditionsonComponent', () => {
  let component: TermsConditionsonComponent;
  let fixture: ComponentFixture<TermsConditionsonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsConditionsonComponent]
    });
    fixture = TestBed.createComponent(TermsConditionsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
