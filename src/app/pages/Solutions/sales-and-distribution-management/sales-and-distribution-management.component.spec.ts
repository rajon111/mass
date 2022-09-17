import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesAndDistributionManagementComponent } from './sales-and-distribution-management.component';

describe('SalesAndDistributionManagementComponent', () => {
  let component: SalesAndDistributionManagementComponent;
  let fixture: ComponentFixture<SalesAndDistributionManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesAndDistributionManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesAndDistributionManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
