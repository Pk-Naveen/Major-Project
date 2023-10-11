import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendIpsComponent } from './extend-ips.component';

describe('ExtendIpsComponent', () => {
  let component: ExtendIpsComponent;
  let fixture: ComponentFixture<ExtendIpsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtendIpsComponent]
    });
    fixture = TestBed.createComponent(ExtendIpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
