import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingPanelComponent } from './building-panel.component';

describe('BuildingPanelComponent', () => {
  let component: BuildingPanelComponent;
  let fixture: ComponentFixture<BuildingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
