import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonMaskingSmsComponent } from './non-masking-sms.component';

describe('NonMaskingSmsComponent', () => {
  let component: NonMaskingSmsComponent;
  let fixture: ComponentFixture<NonMaskingSmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonMaskingSmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonMaskingSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
