import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDashboradComponent } from './customer-dashborad.component';

describe('CustomerDashboradComponent', () => {
  let component: CustomerDashboradComponent;
  let fixture: ComponentFixture<CustomerDashboradComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerDashboradComponent]
    });
    fixture = TestBed.createComponent(CustomerDashboradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
