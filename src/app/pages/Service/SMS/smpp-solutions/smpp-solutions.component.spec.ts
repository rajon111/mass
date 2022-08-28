import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmppSolutionsComponent } from './smpp-solutions.component';

describe('SmppSolutionsComponent', () => {
  let component: SmppSolutionsComponent;
  let fixture: ComponentFixture<SmppSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmppSolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmppSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
