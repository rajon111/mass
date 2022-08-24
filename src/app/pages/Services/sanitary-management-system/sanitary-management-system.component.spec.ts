import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanitaryManagementSystemComponent } from './sanitary-management-system.component';

describe('SanitaryManagementSystemComponent', () => {
  let component: SanitaryManagementSystemComponent;
  let fixture: ComponentFixture<SanitaryManagementSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanitaryManagementSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanitaryManagementSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
