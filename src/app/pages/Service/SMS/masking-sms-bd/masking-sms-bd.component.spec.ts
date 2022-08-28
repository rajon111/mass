import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskingSmsBdComponent } from './masking-sms-bd.component';

describe('MaskingSmsBdComponent', () => {
  let component: MaskingSmsBdComponent;
  let fixture: ComponentFixture<MaskingSmsBdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaskingSmsBdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaskingSmsBdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
