import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingPartnersComponent } from './pricing-partners.component';

describe('PricingPartnersComponent', () => {
  let component: PricingPartnersComponent;
  let fixture: ComponentFixture<PricingPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingPartnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
