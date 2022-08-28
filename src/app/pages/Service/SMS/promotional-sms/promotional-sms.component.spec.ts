import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionalSmsComponent } from './promotional-sms.component';

describe('PromotionalSmsComponent', () => {
  let component: PromotionalSmsComponent;
  let fixture: ComponentFixture<PromotionalSmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionalSmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionalSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
