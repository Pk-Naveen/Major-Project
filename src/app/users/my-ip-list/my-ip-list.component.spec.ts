import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIpListComponent } from './my-ip-list.component';

describe('MyIpListComponent', () => {
  let component: MyIpListComponent;
  let fixture: ComponentFixture<MyIpListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyIpListComponent]
    });
    fixture = TestBed.createComponent(MyIpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
