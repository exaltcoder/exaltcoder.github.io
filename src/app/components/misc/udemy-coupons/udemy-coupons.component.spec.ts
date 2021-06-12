import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemyCouponsComponent } from './udemy-coupons.component';

describe('UdemyCouponsComponent', () => {
  let component: UdemyCouponsComponent;
  let fixture: ComponentFixture<UdemyCouponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdemyCouponsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdemyCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
