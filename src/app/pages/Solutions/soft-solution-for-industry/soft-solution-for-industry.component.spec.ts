import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftSolutionForIndustryComponent } from './soft-solution-for-industry.component';

describe('SoftSolutionForIndustryComponent', () => {
  let component: SoftSolutionForIndustryComponent;
  let fixture: ComponentFixture<SoftSolutionForIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftSolutionForIndustryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftSolutionForIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
