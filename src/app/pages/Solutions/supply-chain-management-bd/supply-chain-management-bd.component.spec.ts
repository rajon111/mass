import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyChainManagementBdComponent } from './supply-chain-management-bd.component';

describe('SupplyChainManagementBdComponent', () => {
  let component: SupplyChainManagementBdComponent;
  let fixture: ComponentFixture<SupplyChainManagementBdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplyChainManagementBdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplyChainManagementBdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
