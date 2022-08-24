import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMassDataComponent } from './about-mass-data.component';

describe('AboutMassDataComponent', () => {
  let component: AboutMassDataComponent;
  let fixture: ComponentFixture<AboutMassDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMassDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMassDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
