import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftableResourceLabelComponent } from './craftable-resource-label.component';

describe('CraftableResourceLabelComponent', () => {
  let component: CraftableResourceLabelComponent;
  let fixture: ComponentFixture<CraftableResourceLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraftableResourceLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraftableResourceLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
