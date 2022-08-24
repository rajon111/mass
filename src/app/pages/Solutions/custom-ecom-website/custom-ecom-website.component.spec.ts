import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomEcomWebsiteComponent } from './custom-ecom-website.component';

describe('CustomEcomWebsiteComponent', () => {
  let component: CustomEcomWebsiteComponent;
  let fixture: ComponentFixture<CustomEcomWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomEcomWebsiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomEcomWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
