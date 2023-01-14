import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipEffectInfoComponent } from './tooltip-effect-info.component';

describe('TooltipEffectInfoComponent', () => {
  let component: TooltipEffectInfoComponent;
  let fixture: ComponentFixture<TooltipEffectInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipEffectInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooltipEffectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
