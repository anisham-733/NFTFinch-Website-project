import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleStore1Component } from './example-store1.component';

describe('ExampleStore1Component', () => {
  let component: ExampleStore1Component;
  let fixture: ComponentFixture<ExampleStore1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleStore1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleStore1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
