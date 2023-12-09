import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstractorTableComponent } from './instractor-table.component';

describe('InstractorTableComponent', () => {
  let component: InstractorTableComponent;
  let fixture: ComponentFixture<InstractorTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstractorTableComponent]
    });
    fixture = TestBed.createComponent(InstractorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
