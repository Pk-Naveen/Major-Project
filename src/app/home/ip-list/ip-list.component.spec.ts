import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpListComponent } from './ip-list.component';

describe('IpListComponent', () => {
  let component: IpListComponent;
  let fixture: ComponentFixture<IpListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpListComponent]
    });
    fixture = TestBed.createComponent(IpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
