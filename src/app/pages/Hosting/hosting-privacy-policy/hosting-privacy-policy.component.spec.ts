import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingPrivacyPolicyComponent } from './hosting-privacy-policy.component';

describe('HostingPrivacyPolicyComponent', () => {
  let component: HostingPrivacyPolicyComponent;
  let fixture: ComponentFixture<HostingPrivacyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostingPrivacyPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostingPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
