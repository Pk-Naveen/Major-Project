import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpRequestComponent } from './ip-request.component';

describe('IpRequestComponent', () => {
  let component: IpRequestComponent;
  let fixture: ComponentFixture<IpRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpRequestComponent]
    });
    fixture = TestBed.createComponent(IpRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
