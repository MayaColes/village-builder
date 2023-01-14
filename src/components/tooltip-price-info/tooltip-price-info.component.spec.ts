import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipPriceInfoComponent } from './tooltip-price-info.component';

describe('TooltipPriceInfoComponent', () => {
  let component: TooltipPriceInfoComponent;
  let fixture: ComponentFixture<TooltipPriceInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipPriceInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooltipPriceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
