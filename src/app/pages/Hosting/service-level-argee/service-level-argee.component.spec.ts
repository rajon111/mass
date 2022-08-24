import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLevelArgeeComponent } from './service-level-argee.component';

describe('ServiceLevelArgeeComponent', () => {
  let component: ServiceLevelArgeeComponent;
  let fixture: ComponentFixture<ServiceLevelArgeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceLevelArgeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceLevelArgeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
