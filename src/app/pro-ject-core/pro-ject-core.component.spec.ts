import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProJectCoreComponent } from './pro-ject-core.component';

describe('ProJectCoreComponent', () => {
  let component: ProJectCoreComponent;
  let fixture: ComponentFixture<ProJectCoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProJectCoreComponent]
    });
    fixture = TestBed.createComponent(ProJectCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
