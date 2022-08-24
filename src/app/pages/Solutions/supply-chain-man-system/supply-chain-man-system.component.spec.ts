import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyChainManSystemComponent } from './supply-chain-man-system.component';

describe('SupplyChainManSystemComponent', () => {
  let component: SupplyChainManSystemComponent;
  let fixture: ComponentFixture<SupplyChainManSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplyChainManSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplyChainManSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
