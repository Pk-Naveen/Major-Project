import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseroverviewComponent } from './useroverview.component';

describe('UseroverviewComponent', () => {
  let component: UseroverviewComponent;
  let fixture: ComponentFixture<UseroverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UseroverviewComponent]
    });
    fixture = TestBed.createComponent(UseroverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
