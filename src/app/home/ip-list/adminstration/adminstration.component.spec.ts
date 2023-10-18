import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstrationComponent } from './adminstration.component';

describe('AdminstrationComponent', () => {
  let component: AdminstrationComponent;
  let fixture: ComponentFixture<AdminstrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminstrationComponent]
    });
    fixture = TestBed.createComponent(AdminstrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
